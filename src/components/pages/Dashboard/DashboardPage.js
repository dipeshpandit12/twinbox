

export default function DashboardPage(props){
    return(
        <>
            <button onClick={props.handleLogout}>Logout</button>
                <h3>Welcome {props.user.displayName}</h3>
                <p>{props.user.email}</p>
                <div className="photo">
                    <img src={props.user.photoURL} alt="/"/>
                </div>
        </>
    )
}