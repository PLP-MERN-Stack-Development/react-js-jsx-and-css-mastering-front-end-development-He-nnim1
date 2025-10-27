import {useTheme} from "./ThemeContext"

export default function ThemeToggle() {
    const {darkmode, setDarkmode} = useTheme();

    return (
        <button
            onClick={() => setDarkmode(!darkmode)}
            className={`px-4 py-2 border rounded-lg transition-colors duration-300
           ${darkmode ? 'bg-gray-100 text-gray-800 border-gray-300' : 'bg-gray-700 text-gray-200 border-gray-600'}`}

        >
            {darkmode ? "Light Mode ☀️" : "Dark Mode 🌙"}
        </button>
    )
}