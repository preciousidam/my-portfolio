import SideBarLayout from '../../Layouts/sidebar';

export default function SideBar(props){
    return(
        <SideBarLayout toogle={props.toogle}>
            <p>someText</p>
        </SideBarLayout>
    );
}