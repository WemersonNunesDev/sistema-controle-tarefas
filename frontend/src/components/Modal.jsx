import '../index.css'

export default function Modal({ show, onClose, children }) {
    if (!show) return null;

    const design = {
        modal: 'fixed inset-0 bg-black/50 flex items-center justify-center z-50',
        bgBody: 'bg-white rounded-lg p-6 max-w-md w-full'
    };


    return (
        <div className={`${design.modal} bg-opacity-`} onClick={onClose}>
            <div className={`${design.bgBody}`} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}
