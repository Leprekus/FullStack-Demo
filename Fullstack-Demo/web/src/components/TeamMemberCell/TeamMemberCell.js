export const QUERY = gql`
  query FindTeamMemberQuery($id: Int!) {
    teamMember: teamMember(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ teamMember }) => {
  return <div>{JSON.stringify(teamMember)}</div>
}
