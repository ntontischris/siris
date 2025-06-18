"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Loader2 } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Το όνομα είναι υποχρεωτικό"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Το email είναι υποχρεωτικό"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Παρακαλώ εισάγετε ένα έγκυρο email"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Το μήνυμα είναι υποχρεωτικό"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Success
      setSubmitStatus({
        success: true,
        message: "Το μήνυμά σας στάλθηκε επιτυχώς! Θα επικοινωνήσουμε μαζί σας σύντομα.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "Υπήρξε ένα πρόβλημα κατά την αποστολή του μηνύματος. Παρακαλώ δοκιμάστε ξανά.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-amber-400 mb-1">
          Ονοματεπώνυμο <span className="text-red-500">*</span>
        </label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="bg-gray-900 border-gray-700 focus:border-amber-500 focus:ring-amber-500 text-white"
          placeholder="Το ονοματεπώνυμό σας"
        />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-amber-400 mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="bg-gray-900 border-gray-700 focus:border-amber-500 focus:ring-amber-500 text-white"
          placeholder="Το email σας"
        />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-amber-400 mb-1">
          Θέμα
        </label>
        <Input
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="bg-gray-900 border-gray-700 focus:border-amber-500 focus:ring-amber-500 text-white"
          placeholder="Το θέμα του μηνύματός σας"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-amber-400 mb-1">
          Μήνυμα <span className="text-red-500">*</span>
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="bg-gray-900 border-gray-700 focus:border-amber-500 focus:ring-amber-500 text-white min-h-[120px]"
          placeholder="Το μήνυμά σας"
        />
        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full bg-amber-600 hover:bg-amber-700 text-white">
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Αποστολή...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Αποστολή Μηνύματος
          </>
        )}
      </Button>

      {submitStatus && (
        <div
          className={`p-3 rounded-md ${
            submitStatus.success ? "bg-green-900/50 text-green-300" : "bg-red-900/50 text-red-300"
          }`}
        >
          {submitStatus.message}
        </div>
      )}
    </form>
  )
}
