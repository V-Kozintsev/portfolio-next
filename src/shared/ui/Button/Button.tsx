import styles from "./Button.module.scss"

interface ButtomProps { 
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    onClick?: () => void;
}

export function Button ({ children,variant="primary",onClick }: ButtomProps) { 
    return (
        <button className={`${styles.button} ${styles[`button--${variant}`]}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}