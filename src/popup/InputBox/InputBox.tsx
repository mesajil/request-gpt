'use client'

import { useState } from 'react'
import styles from './InputBox.module.css'

const InputBox: React.FC = () => {
  const [prompt, setPrompt] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Prompt enviado:', prompt)
    setPrompt('')
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value)
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <div className={styles.inputButtonContainer}>
            <textarea
              id='prompt'
              placeholder='Message ChatGPT'
              value={prompt}
              onChange={handleChange}
              className={styles.textarea}
              rows={4}
            />
            <button type='submit' className={styles.button}>
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default InputBox
