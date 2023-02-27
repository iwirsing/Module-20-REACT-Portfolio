import './Header.module.css';

function Header(props)
{

return <div className='title' alt='IW' style={{ height: "25vh", fontSize:"11rem"}}>
    <h1>
        {props.title}
    </h1>
</div>;
}

export default Header;