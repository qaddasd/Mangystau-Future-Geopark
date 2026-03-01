'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function AIGuide() {
    const { language } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ sender: 'ai' | 'user'; text: string }[]>([]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const initialGreeting = {
        kz: "Сәлеметсіз бе! Мен AI Гидпін. Маңғыстау туралы қандай сұрағыңыз бар?",
        ru: "Здравствуйте! Я ИИ-гид. Какой у вас есть вопрос про Мангистау?",
        en: "Hello! I am an AI Guide. What question do you have about Mangystau?"
    }[language];

    const responses = {
        kz: [
            { q: "Шерқала қайда", a: "Шерқала Ақтау қаласынан шамамен 170 км қашықтықта, Таушық ауылы маңында орналасқан." },
            { q: "жануарлар", a: "Маңғыстауда Каспий итбалығы, Қоқиқаз (Фламинго) және Аққу сияқты ерекше жануарлар мен құстар бар. 'Фауна' бетін қараңыз." },
            { q: "ереже", a: "Табиғатты қорғау үшін: белгіленген жолдан шықпаңыз, қоқыс тастамаңыз және жабайы жануарларға жақындамаңыз." },
            { q: "ақтау", a: "Ақтау - теңіз жағасындағы қаламыз. Картадан 'Каспий жағалауы және Ақтау' нүктесін басып көре аласыз." }
        ],
        ru: [
            { q: "шеркала", a: "Шеркала находится примерно в 170 км от Актау, недалеко от села Таушык." },
            { q: "животн", a: "В Мангистау обитают Каспийские тюлени, Фламинго и Лебеди. Смотрите страницу 'Фауна'." },
            { q: "правил", a: "Для защиты природы: не съезжайте с дорог, не мусорите и не приближайтесь к животным." },
            { q: "актау", a: "Актау - единственный город у моря в регионе. Вы можете найти его на нашей карте." }
        ],
        en: [
            { q: "sherkala", a: "Mount Sherkala is located about 170 km from Aktau, near the Taushyk village." },
            { q: "animal", a: "Mangystau is home to Caspian seals, flamingos, and swans. Visit the 'Fauna' page for more." },
            { q: "rule", a: "To protect nature: stay on roads, carry out trash, and do not approach wildlife." },
            { q: "aktau", a: "Aktau is the coastal city of our region. Check it out on our interactive map." }
        ]
    };

    const fallbackResponse = {
        kz: "Кешіріңіз, мен бұл сұраққа жауап бере алмаймын. Қосымша мәліметті біздің 'Ғылыми түсіндірме' бөлімінен қараңыз.",
        ru: "Извините, я не могу ответить на этот вопрос. Дополнительную информацию смотрите в разделе 'Научное объяснение'.",
        en: "Sorry, I cannot answer this right now. Please check our 'Science' section for more information."
    }[language];

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setMessages([{ sender: 'ai', text: initialGreeting }]);
        }
    }, [isOpen, language, initialGreeting, messages.length]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userText = input.trim();
        setMessages(prev => [...prev, { sender: 'user', text: userText }]);
        setInput('');
        setIsLoading(true);

        try {
            // Include system context or previous messages if needed, but for now just send the user prompt
            // Instructing it to act as a Geopark guide
            const systemPrompt = language === 'kz'
                ? "Сен Маңғыстау геопаркінің гидісің. Қысқа әрі нұсқа жауап бер."
                : language === 'ru'
                    ? "Ты гид геопарка Мангистау. Отвечай кратко и по делу."
                    : "You are a guide for Mangystau geopark. Answer concisely.";

            const payload = {
                messages: [
                    { role: "system", content: systemPrompt },
                    { role: "user", content: userText }
                ]
            };

            const response = await fetch('/api/ai', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error('API request failed: ' + response.statusText);
            }

            const data = await response.json();

            let aiReply = fallbackResponse;
            if (data?.response?.message?.content) {
                aiReply = data.response.message.content;
            } else if (data?.choices && data.choices[0]?.message?.content) {
                aiReply = data.choices[0].message.content;
            } else if (data?.message && typeof data.message === 'string') {
                aiReply = data.message;
            } else if (data?.error) {
                aiReply = typeof data.error === 'string' ? data.error : (data.error?.message || fallbackResponse);
            }

            setMessages(prev => [...prev, { sender: 'ai', text: aiReply }]);
        } catch (error) {
            console.error(error);
            setMessages(prev => [...prev, { sender: 'ai', text: fallbackResponse }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    if (!isMounted) return null;

    return (
        <div className="fixed bottom-6 right-6 z-[99999] flex flex-col items-end">
            {/* Chat Window */}
            <div className={`transition-all duration-300 transform origin-bottom-right ${isOpen ? 'scale-100 opacity-100 mb-4' : 'scale-0 opacity-0 h-0 w-0 overflow-hidden'}`}>
                <div className="w-[320px] sm:w-[350px] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden">
                    {/* Header */}
                    <div className="bg-emerald-600 p-4 text-white flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <Bot className="w-5 h-5 text-emerald-100" />
                            <span className="font-semibold text-[15px]">AI Guide</span>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-emerald-100 hover:text-white transition-colors">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Chat Area */}
                    <div className="h-[350px] overflow-y-auto p-4 flex flex-col space-y-3 bg-gray-50/50">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[85%] p-3 rounded-2xl text-[14px] leading-relaxed ${msg.sender === 'user'
                                    ? 'bg-emerald-600 text-white rounded-br-sm'
                                    : 'bg-white text-gray-700 border border-gray-100 shadow-sm rounded-bl-sm'
                                    }`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-white text-gray-400 p-3 rounded-2xl shadow-sm text-sm border border-gray-100 rounded-bl-sm flex items-center gap-1">
                                    <span className="animate-bounce">.</span>
                                    <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>.</span>
                                    <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>.</span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-3 bg-white border-t border-gray-100 flex items-center space-x-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="..."
                            disabled={isLoading}
                            className="flex-1 px-4 py-2 bg-gray-100 rounded-full text-[14px] focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all text-gray-800 disabled:opacity-50"
                        />
                        <button
                            onClick={handleSend}
                            disabled={isLoading}
                            className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center hover:bg-emerald-700 transition-colors shadow-sm disabled:opacity-50"
                        >
                            <Send className="w-4 h-4 ml-0.5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center justify-center w-14 h-14 rounded-full shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all duration-300 hover:scale-105 ${isOpen ? 'bg-gray-800 text-white' : 'bg-emerald-600 text-white'
                    }`}
            >
                {isOpen ? <X className="w-6 h-6" /> : <Sparkles className="w-6 h-6" />}
            </button>
        </div>
    );
}
