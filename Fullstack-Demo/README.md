### Process

## Technologies
* Redwood
* Storybook
* Tailwind

## Process
* Initialize Storybook server &rarr; yarn rw storybook
* Generate team page &rarr; yarn rw [generate](https://redwoodjs.com/docs/cli-commands#generate-alias-g) page team
* Setup Tailwind &rarr; yarn rw [setup](https://redwoodjs.com/docs/custom-web-index#setup) ui tailwindcss
  * Storybook server needs to be restarted afterwards to load tailwind
* yarn rw g cell teamMembers
  * Fetching component, handles state
* the  teamMember objects in teamMembersCell.mock sets up mocks for data fetching
* These objects should have the same data structure as in teamMembersQuery



