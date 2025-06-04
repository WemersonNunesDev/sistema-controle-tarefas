import '../index.css'

export default function Buttons({style, description, type = 'button', design = 'neutral', onAcao}) {

    const baseStyle = 'w-32px text-sm md:text-[14px] text-slate-50 font-semibold px-2 py-1 cursor-pointer rounded';
    const hoverStyle = 'hover:bg-transparent hover:outline-2 hover:transition hover:duration-300 hover:ease-in-out'

    const variants = {
        primary: 'bg-blue-500 hover:outline-blue-500 hover:text-blue-500',
        sucess: 'bg-green-500 hover:outline-green-500 hover:text-green-500',
        alert: 'bg-red-500 hover:outline-red-500 hover:text-red-500',
        neutral: 'bg-gray-400 hover:outline-gray-500 hover:text-gray-500',
    }
    
    const variantClass = variants[design] || variants.neutral;

    return (
        <button 
            type={type}
            onClick={onAcao}
            className={`${style} ${baseStyle} ${hoverStyle} ${variantClass}`}
        >
            {description}
        </button>
    )
}
