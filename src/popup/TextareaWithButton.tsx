import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

export function TextareaWithButton() {
  return (
    <div className='grid w-full gap-2'>
      <Textarea rows={3} placeholder='Type your message here.' />
      <Button>Send message</Button>
    </div>
  )
}
