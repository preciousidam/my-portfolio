import '../styles/styles.scss';

export default function SideBar({children, toogle}){
    return(
        <aside className={`sidebar ${toogle}`} id="slider">
            <div>
                {children}
                <p>SideBar</p>
            </div>
        </aside>
    );
}