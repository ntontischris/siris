"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, User, Bot, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Message {
  id: string
  text: string
  isBot: boolean
  timestamp: Date
}

interface QuickQuestion {
  id: string
  question: string
  answer: string
}

const quickQuestions: QuickQuestion[] = [
  {
    id: "1",
    question: "Τι είδους όργανα κατασκευάζετε;",
    answer:
      "Κατασκευάζουμε χειροποίητες ποντιακές λύρες, μπαγλαμάδες και επισκευάζουμε παραδοσιακά όργανα. Επίσης διαθέτουμε κιθάρες, βιολιά, ουτιά και μπουζούκια από επιλεγμένες μάρκες.",
  },
  {
    id: "2",
    question: "Πόσο κοστίζει μια χειροποίητη ποντιακή λύρα;",
    answer:
      "Οι χειροποίητες ποντιακές λύρες ξεκινούν από 400€ και η τιμή εξαρτάται από το ξύλο που θα επιλέξετε και τις προδιαγραφές. Κάθε λύρα είναι μοναδική και κατασκευάζεται κατόπιν παραγγελίας.",
  },
  {
    id: "3",
    question: "Πόσος χρόνος χρειάζεται για την κατασκευή μιας λύρας;",
    answer:
      "Η κατασκευή μιας χειροποίητης ποντιακής λύρας διαρκεί συνήθως 2-4 εβδομάδες, ανάλογα με την πολυπλοκότητα και τις προδιαγραφές. Επικοινωνήστε μαζί μας για ακριβή χρονοδιάγραμμα.",
  },
  {
    id: "4",
    question: "Που βρίσκεται το κατάστημά σας;",
    answer:
      "Βρισκόμαστε στην Κύπρου 12, Σταυρούπολη, Θεσσαλονίκη. Είμαστε ανοιχτά Δευτέρα-Παρασκευή 9:00-15:00 και 18:00-21:00. Τηλέφωνο: +30 694 627 8589",
  },
  {
    id: "5",
    question: "Διαθέτετε χορδές και αξεσουάρ;",
    answer:
      "Ναι! Διαθέτουμε χορδές Galli για ποντιακή λύρα, τρίχες δοξαριού από Μογγολία, θήκες οργάνων, κουρδιστήρια και πολλά άλλα αξεσουάρ για όλα τα έγχορδα όργανα.",
  },
]

const initialMessage: Message = {
  id: "welcome",
  text: "Γεια σας! Είμαι εδώ για να σας βοηθήσω με ερωτήσεις σχετικά με τα παραδοσιακά όργανα και τις υπηρεσίες μας. Επιλέξτε μια από τις παρακάτω ερωτήσεις ή γράψτε τη δική σας!",
  isBot: true,
  timestamp: new Date(),
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([initialMessage])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [showQuickQuestions, setShowQuickQuestions] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const addMessage = (text: string, isBot: boolean) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, newMessage])
  }

  const handleQuickQuestion = (question: QuickQuestion) => {
    // Add user question
    addMessage(question.question, false)
    setShowQuickQuestions(false)

    // Show typing indicator
    setIsTyping(true)

    // Add bot response after delay
    setTimeout(() => {
      setIsTyping(false)
      addMessage(question.answer, true)
    }, 1000)
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage = inputValue.trim()
    addMessage(userMessage, false)
    setInputValue("")
    setShowQuickQuestions(false)

    // Show typing indicator
    setIsTyping(true)

    // Simple keyword-based responses
    setTimeout(() => {
      setIsTyping(false)
      let response =
        "Ευχαριστώ για την ερώτησή σας! Για πιο λεπτομερείς πληροφορίες, παρακαλώ επικοινωνήστε μαζί μας στο +30 694 627 8589 ή στο email siristatidistheo@gmail.com"

      const lowerMessage = userMessage.toLowerCase()

      if (lowerMessage.includes("λύρα") || lowerMessage.includes("λυρα")) {
        response =
          "Οι χειροποίητες ποντιακές λύρες μας ξεκινούν από 400€. Κάθε λύρα είναι μοναδική και κατασκευάζεται με ξύλο της επιλογής σας. Θα χαρούμε να συζητήσουμε τις προδιαγραφές μαζί σας!"
      } else if (
        lowerMessage.includes("τιμή") ||
        lowerMessage.includes("τιμη") ||
        lowerMessage.includes("κόστος") ||
        lowerMessage.includes("κοστος")
      ) {
        response =
          "Οι τιμές εξαρτώνται από το όργανο και τις προδιαγραφές. Ποντιακές λύρες από 400€, κιθάρες από 199€, βιολιά από 299€. Επικοινωνήστε για ακριβή προσφορά!"
      } else if (
        lowerMessage.includes("χρόνος") ||
        lowerMessage.includes("χρονος") ||
        lowerMessage.includes("παράδοση") ||
        lowerMessage.includes("παραδοση")
      ) {
        response =
          "Η κατασκευή χειροποίητων οργάνων διαρκεί 2-4 εβδομάδες. Τα έτοιμα όργανα παραδίδονται άμεσα. Επικοινωνήστε για ακριβές χρονοδιάγραμμα!"
      } else if (
        lowerMessage.includes("που") ||
        lowerMessage.includes("διεύθυνση") ||
        lowerMessage.includes("διευθυνση")
      ) {
        response =
          "Βρισκόμαστε στην Κύπρου 12, Σταυρούπολη, Θεσσαλονίκη. Ώρες λειτουργίας: Δευτέρα-Παρασκευή 9:00-15:00 και 18:00-21:00."
      } else if (
        lowerMessage.includes("χορδές") ||
        lowerMessage.includes("χορδες") ||
        lowerMessage.includes("αξεσουάρ") ||
        lowerMessage.includes("αξεσουαρ")
      ) {
        response =
          "Διαθέτουμε χορδές Galli, τρίχες δοξαριού από Μογγολία, θήκες οργάνων, κουρδιστήρια και πολλά άλλα αξεσουάρ για όλα τα έγχορδα όργανα!"
      }

      addMessage(response, true)
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  const handleRefresh = () => {
    setMessages([initialMessage])
    setShowQuickQuestions(true)
    setInputValue("")
    setIsTyping(false)
  }

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-4 right-4 z-40">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-amber-600 hover:bg-amber-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          aria-label="Άνοιγμα chatbot"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:inset-auto md:bottom-16 md:right-4 md:w-96 md:h-[500px]">
          {/* Mobile backdrop */}
          <div className="absolute inset-0 bg-black/50 md:hidden" onClick={() => setIsOpen(false)} />

          {/* Chat container */}
          <div className="relative h-full w-full bg-gradient-to-br from-gray-900 to-gray-800 border border-amber-900/30 md:rounded-xl shadow-2xl flex flex-col overflow-hidden md:max-h-[500px]">
            {/* Header */}
            <div className="bg-gradient-to-r from-amber-600 to-amber-700 p-3 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">Βοηθός Σιριστατίδη</h3>
                  <p className="text-amber-100 text-xs">Παραδοσιακά Όργανα</p>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <Button
                  onClick={handleRefresh}
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/20 p-2"
                  title="Νέα συνομιλία"
                >
                  <RotateCcw className="h-4 w-4" />
                </Button>
                <Button
                  onClick={() => setIsOpen(false)}
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/20 p-2"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 space-y-3 min-h-0">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
                  <div
                    className={`max-w-[85%] p-3 rounded-lg ${
                      message.isBot ? "bg-gray-700 text-white" : "bg-amber-600 text-white"
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {message.isBot && <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                      {!message.isBot && <User className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Quick Questions */}
              {showQuickQuestions && (
                <div className="space-y-2">
                  <p className="text-amber-400 text-sm font-medium">Συχνές Ερωτήσεις:</p>
                  {quickQuestions.map((q) => (
                    <button
                      key={q.id}
                      onClick={() => handleQuickQuestion(q)}
                      className="w-full text-left p-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-gray-300 hover:text-white text-sm transition-colors border border-gray-700 hover:border-amber-900/40"
                    >
                      {q.question}
                    </button>
                  ))}
                </div>
              )}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-700 p-3 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Bot className="h-4 w-4" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-gray-700 flex-shrink-0">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Γράψτε την ερώτησή σας..."
                  className="flex-1 bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-amber-500 text-sm"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="bg-amber-600 hover:bg-amber-700 text-white px-3 flex-shrink-0"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2">Για άμεση εξυπηρέτηση: +30 694 627 8589</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
