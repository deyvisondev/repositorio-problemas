export default function Button (
    props) {
    return (
        <button {...props} 
        disabled={props.disabled}
        className={
            "flex items-center gap-2 py-1 px-4 rounded-md text-opacity-90 " 
            + (props.primary ? ' bg-blue-500 text-white' : ' text-gray-600')
            + (props.disabled ? ' text-opacity-50 bg-opacity-50 cursor-not-allowed' : ' ')
        }/>
    )
}