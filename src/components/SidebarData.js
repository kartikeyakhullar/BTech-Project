import React from 'react';
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as DiIcons from "react-icons/di";


export const SidebarData = [
    {
        title : 'Home',
        path : '/',
        icon : <AiIcons.AiFillHome />,
        cName : 'nav-text',
    },
    {
        title : 'Report',
        path : '/report',
        icon : <IoIcons.IoIosPaper />,
        cName : 'nav-text',
    },
    {
        title : 'Presentation',
        path : '/presentation',
        icon : <AiIcons.AiFillFilePpt />,
        cName : 'nav-text',
    },
    {
        title : 'Team',
        path : '/team',
        icon : <IoIcons.IoMdPeople />,
        cName : 'nav-text',
    },
    {
        title : 'Dataset',
        path : '/dataset',
        icon : <DiIcons.DiDatabase />,
        cName : 'nav-text',
    }

]