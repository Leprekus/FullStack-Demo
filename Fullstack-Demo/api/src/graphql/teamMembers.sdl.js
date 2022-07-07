export const schema = gql`
  type TeamMember {
    id: Int!
    name: String!
    role: String!
    imageURL: String!
    twitterURL: String!
    linkedInURL: String!
  }

  type Query {
    teamMembers: [TeamMember!]! @skipAuth
    teamMember(id: Int!): TeamMember @skipAuth
  }

  input CreateTeamMemberInput {
    name: String!
    role: String!
    imageURL: String!
    twitterURL: String!
    linkedInURL: String!
  }

  input UpdateTeamMemberInput {
    name: String
    role: String
    imageURL: String
    twitterURL: String
    linkedInURL: String
  }

  type Mutation {
    createTeamMember(input: CreateTeamMemberInput!): TeamMember! @requireAuth
    updateTeamMember(id: Int!, input: UpdateTeamMemberInput!): TeamMember!
      @requireAuth
    deleteTeamMember(id: Int!): TeamMember! @requireAuth
  }
`
