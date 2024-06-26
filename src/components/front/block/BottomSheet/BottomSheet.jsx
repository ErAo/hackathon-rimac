import './BottomSheet.scss'

export default function BottomSheet({
    children,
    isOpen = false
}) {
    return (
        <div className={`bottom_sheet ${isOpen ? 'bottom_sheet--open' : ''}`}>
            <div className="bottom_sheet__content">
                {children}
            </div>
        </div>
    )
}