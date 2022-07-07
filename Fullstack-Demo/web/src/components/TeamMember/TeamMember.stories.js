import TeamMember from './TeamMember'
import {standard} from '../TeamMembersCell/TeamMembersCell.mock'
export const generated = () => {
  return <TeamMember teamMember={standard().teamMembers[0]}/>
}

export default { title: 'Components/TeamMember' }
