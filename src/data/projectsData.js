import datamarsLivestockThumbnail from '../assets/png/datamars_livestock_thumbnail.png'
import petLinkThumbnail from '../assets/png/pet_link_thumbnail.png'
import bccThumbnail from '../assets/png/bcc_thumbnail.png'
import agosThumbnail from '../assets/png/agos_thumbnail.png'
import generaliThumbnail from '../assets/png/generali_thumbnail.png'
import windowsAppsThumbnail from '../assets/png/windows_apps_thumbnail.png'


export const projectsData = [
    {
        id: 1,
        projectName: 'Datamars Livestock',
        projectNameFirstPart: 'Datamars',
        projectNameSecondPart: 'Livestock',
        projectDesc: 'A web and mobile platform to manage your farms and their animals and devices',
        tags: ['Angular', 'Typescript', 'Node.js', 'GraphQL'],
        image: datamarsLivestockThumbnail
    },
    {
        id: 2,
        projectName: 'Pet Link',
        projectNameFirstPart: 'Pet',
        projectNameSecondPart: 'Link',
        projectDesc: 'A web an mobile application to track your pets and manage their relevant information',
        tags: ['Javascript', 'HTML', 'CSS', 'AWS'],
        image: petLinkThumbnail
    },
    {
        id: 3,
        projectName: 'BCC Banking',
        projectNameFirstPart: 'BCC',
        projectNameSecondPart: 'Banking',
        projectDesc: 'A web banking transactions dashboard where clients can control their account and perform various operations',
        tags: ['Angular', 'Java', 'Spring', 'SQL'],
        image: bccThumbnail
    },
    {
        id: 4,
        projectName: 'AGOS Loaning',
        projectNameFirstPart: 'AGOS',
        projectNameSecondPart: 'Loaning',
        projectDesc: "A web loaning portal where brokers can analyze clients' situation and stipulate personalized contracts",
        tags: ['Javascript', 'Java', 'COBOL', 'Unix'],
        image: agosThumbnail
    },
    {
        id: 5,
        projectName: 'Generali Car Insurance Claims',
        projectNameFirstPart: 'Generali Car',
        projectNameSecondPart: 'Insurance Claims',
        projectDesc: 'A web portal where agents can create car insurance claims, defining parameters and premiums',
        tags: ['COBOL', 'Unix', 'Java', 'SQL'],
        image: generaliThumbnail
    },
    {
        id: 6,
        projectName: 'Windows 8 Applications',
        projectNameFirstPart: 'Windows 8',
        projectNameSecondPart: 'Applications',
        projectDesc: "Two management mobile apps: Mind8, useful to create mind maps; and File Cards, targeted at controlling the device's storage",
        tags: ['C#', 'SQL', 'Cocos2D', 'ActionScript3'],
        image: windowsAppsThumbnail
    }
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/