import { useState } from 'react'
import axios from 'axios'

const initialState = { name: '', email: '', message: '' }

export default function ContactForm() {
  const [form, setForm] = useState(initialState)
  const [status, setStatus] = useState(null) // null | 'loading' | 'success' | 'error'
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required.'
    if (!form.email.trim()) e.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email.'
    if (!form.message.trim()) e.message = 'Message is required.'
    return e
  }

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
    setErrors((err) => ({ ...err, [e.target.name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const v = validate()
    if (Object.keys(v).length) { setErrors(v); return }
    setStatus('loading')
    try {
      await axios.post('/api/contact', form)
      setStatus('success')
      setForm(initialState)
    } catch {
      setStatus('error')
    }
  }

  const field = (name, label, type = 'text', isTextarea = false) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor={name}>
        {label}
      </label>
      {isTextarea ? (
        <textarea
          id={name}
          name={name}
          rows={5}
          value={form[name]}
          onChange={handleChange}
          placeholder={`Your ${label.toLowerCase()}...`}
          className={`w-full px-4 py-3 rounded-lg border text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
            errors[name] ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white'
          }`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={form[name]}
          onChange={handleChange}
          placeholder={`Your ${label.toLowerCase()}`}
          className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
            errors[name] ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white'
          }`}
        />
      )}
      {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name]}</p>}
    </div>
  )

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {field('name', 'Full Name')}
      {field('email', 'Email Address', 'email')}
      {field('message', 'Message', 'text', true)}

      {status === 'success' && (
        <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg px-4 py-3 text-sm">
          Message sent successfully! We'll get back to you within 1–2 business days.
        </div>
      )}
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">
          Something went wrong. Please try again or email us directly.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}
