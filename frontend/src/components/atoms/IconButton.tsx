import type { IconButtonProps } from '../../types'

function IconButton({ label, type = 'button', onClick, children }: IconButtonProps) {
  return (
    <button type={type} aria-label={label} title={label} onClick={onClick}>
      {children}
    </button>
  )
}

export default IconButton
