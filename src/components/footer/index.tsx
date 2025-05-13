interface FooterProps {
    color: string
    text: string
}
export function Footer({ color, text }: FooterProps) {

    return (
        <div style={{
            justifyContent: "center",
            display: "flex",
            color: color
        }}>{text}
        </div>)
}