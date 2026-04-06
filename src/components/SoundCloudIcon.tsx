interface SoundCloudIconProps {
  className?: string;
  size?: number;
  color?: string;
}

export default function SoundCloudIcon({ className = '', size = 24, color = 'currentColor' }: SoundCloudIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color}
      className={className}
    >
      <path d="M11.56 8.87V17h8.76c1.85 0 3.35-1.61 3.35-3.61 0-2-1.5-3.61-3.35-3.61-.34 0-.68.05-1 .14C19.04 7.89 17.27 6.5 15.14 6.5c-1.04 0-2 .37-2.76 1-.08.07-.13.16-.13.26v1.11zm-1.67-.56v8.69h.83V8.18c-.28-.1-.55-.1-.83.13zm-1.66.7v7.99h.83V9.37c-.12-.22-.37-.42-.83-.36zm-1.67 1.17v6.82h.84V10.3c-.16-.22-.42-.35-.84-.12zm-1.66.97v5.73h.83v-5.6c-.25-.22-.53-.27-.83-.13zm-1.67.7v5.16h.84v-4.97c-.2-.17-.46-.27-.84-.19zm-1.66.86v4.17h.83v-3.98c-.21-.15-.48-.25-.83-.19zm-1.67.83v3.47h.83v-3.28c-.2-.12-.45-.23-.83-.19z" />
    </svg>
  );
}
