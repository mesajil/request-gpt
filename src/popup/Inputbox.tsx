import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'

export function Inputbox() {
  const [message, setMessage] = useState('')
  const showAlert = (message: string) => alert(message)
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value)
  }
  return (
    <div className='grid w-full gap-2'>
      <Textarea rows={3} placeholder='Type your message here.' value={message} onChange={handleTextareaChange} />
      <Button onClick={() => showAlert(message)}>Send message</Button>
    </div>
  )
}
