import { NavLink } from 'react-router-dom'
import type { IColors } from '../../lib'
import { Icon } from '../../lib'

interface IProps {
  variant?: 'text' | 'contained' | 'outlined' | 'watercolor'
  children?: React.ReactNode,
  href?: string,
  reload?: boolean,
  external?: boolean,
  disabled?: boolean,
  color?: IColors,
  span?: boolean,
  size?: 'sm' | 'md' | 'lg',
  startIcon?: string,
  endIcon?: string,
  className: string
}

export const Button = ({variant, children, href, reload, external, disabled, color, span, size, startIcon, endIcon, className, ...rest}: IProps) => {
  const getClass = () => `
    btn 
    text-decoration-none
    ${disabled ? `disabled` : ""}
    ${color && variant == 'text' ? `text-${color} border-0` : ""}
    ${color && variant == 'contained' ? `btn-${color}` : ""}
    ${color && variant == 'outlined' ? `btn-outline-${color}` : ""}
    ${color && variant == 'watercolor' ? `watercolor-${color}` : ""}
    ${size == 'sm' ? `btn-sm` : ""}
    ${size == 'md' ? `` : ""}
    ${size == 'lg' ? `btn-lg` : ""}
    ${className}
  `;

  if (href && external) {
    return (
      <a className={getClass()} href={href} target={external ? "_blank" : "_top"} {...rest}>
        {startIcon && <Icon className={`${children && "me-1"}`} icon={startIcon} />}
        {children}
        {endIcon && <Icon className="ms-1" icon={endIcon} />}
      </a>
    )
  }

  if (href) {
    return (
      <NavLink className={getClass()} to={href} reloadDocument={reload} {...rest}>
        {startIcon && <Icon className={`${children && "me-1"}`} icon={startIcon} />}
        {children}
        {endIcon && <Icon className="ms-1" icon={endIcon} />}
      </NavLink>
    )
  }

  if (span) {
    return (
      <span className={getClass()} {...rest}>
        {startIcon && <Icon className={`${children && "me-1"}`} icon={startIcon} />}
        {children}
        {endIcon && <Icon className="ms-1" icon={endIcon} />}
      </span>
    )
  }

  return (
    <button className={getClass()} disabled={disabled} {...rest}>
      {startIcon && <Icon className={`${children && "me-1"}`} icon={startIcon} />}
      {children}
      {endIcon && <Icon className="ms-1" icon={endIcon} />}
    </button>
  )
}
