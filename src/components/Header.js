import Button from './button'
import { useLocation } from 'react-router-dom'

const Header = ({ onAdd, showAddTask }) => {
    const location = useLocation()
    return (
        <header className='header'>
            <h1>Task Manager</h1>
            { location.pathname === '/' && <Button 
            color={showAddTask ? 'red' : 'green'}
             text={showAddTask ? 'Close' : 'Add'}
             onClick={onAdd}
             />}
        </header>
    )
}

export default Header