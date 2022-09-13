 interface latestUpdates{
  id: string;
  bugs: Bug[];
  features: Feature[];
  releaseType: ReleaseType;
  date: string; // either we can use unix timestamps or dd-mm-yyyy format
  authors: string[];
}

interface Bug {
  id:string;
  description:string
}

interface Feature {
    id:string;
   description:string
}

enum ReleaseType {
  Major,
  Enhancement,
  Patch
}
 var latestUpdates=[
 {
 id:'4.2.1',
 date:'01-03-2022',
 bugs:"#2345",
 features:"listen the songs in offline",
 app:"spoyify",
 author:["simran","joethika"],
 releaseType:"major"

 },
 {
 id:'3.9',
 date:'14-01-2022',
 bugs:"#1234",
 features:"3d avathar",
 app:"snapchat",
 author:"joethika",
 releaseType:"major"

 },
 {
 id:'4.1',
 date:'26-12-2021',
 bugs:"#9790",
 features:"double thumbs up",
 app:"netflix",
 author:"nithya",
 releaseType:"major" 
 },
 {
 id:'3.3',
 date:'15-11-2021',
 bugs:'#9025',
 features:"videocall with 8 person",
 app:"Google Doc",
 author:"sindhuja",
 releaseType:"major"
 },
 {
 id:'4.5',
 date:'29-12-2021',
 bugs:'#4990',
 features:"gifstickers",
 app:"whatsapp",
 author:"madhumitha",
 releaseType:"match enhancement"
 },
 { id:'4.7',
 date:'17-08-2022',
 bugs:'#9060',
 features:"create your own awathar",
 app:"instagram",
 author:"sindhuja",
 releaseType:"match enhancement"
 }]

 function findYear(year:string){                                 
 var counting=latestUpdates.filter(n=>n.date.slice(6,10)===(year))
 console.log(`"how many release made in this year?"
  ${counting.length} "versions came in the year of ${year}`)
 console.log(counting)
 }
 findYear('2022')


 console.log('***************************************************************************************************************************')
 function findAuthor(name:string){
 var countAuthor=latestUpdates.filter(n=>n.author===(name))
 console.log(`"which author has worked in many release?"
 ${name} is the only author who worked ${countAuthor.length} times in software updates `)
 console.log(countAuthor)
 }
findAuthor('sindhuja')
                                                                    
 console.log("***********************************************************************************************************************")

  function findBugID(bugID:string){
 var bugs=latestUpdates.filter(n=>n.bugs===(bugID))
 console.log(`"In which release specific bugID is present?
         bugID ${bugID} released in 2022`)
 console.log(bugs)
  }

findBugID('#9060')
 console.log('__________________________________________________________________________________________________________________________')
 console.log('match enhancement')

 function findFeatures(id:string){
 var softwareUpdatedVersion=latestUpdates.filter(n=>n.features===(id))
 console.log(`${softwareUpdatedVersion.length} "software which having ${id} feature `)
 console.log(softwareUpdatedVersion)
 }
 findFeatures("create your own awathar")

 console.log("*************************************************************************************************************************")
 
 
  function findType(releaseType:string){
 var softwareType=latestUpdates.filter(n=>n.releaseType===(releaseType))
 console.log(`"  the software which having ${releaseType} type `)
 console.log(softwareType)
 }
 console.log('__________________________________________________________________________________________________________________________')
findType('major')
function getYear(date:string){
  return Number(date.split('-'[2]))
}
function getMonth(date:string){
  return date.split('-'[1])
}
function getDate(date:string){
  return date.split('-'[0])
}
