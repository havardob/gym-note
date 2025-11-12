interface IconProps {
  icon: string;
}

export const Icon = ({ icon }: IconProps) => {
  return (
    <span className={"icon"}>
      {icon}
    </span>
  )
}