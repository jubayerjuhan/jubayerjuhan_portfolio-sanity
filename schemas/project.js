export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {name: 'name', title: 'Name', type: 'string'},
    {name: 'desctiption', title: 'Desctiption', type: 'string'},
    {name: 'githubLink', title: 'Github Link', type: 'string'},
    {name: 'liveLink', title: 'Live Link', type: 'string'},
    {
      title: 'Type',
      name: 'type',
      type: 'string',
      options: {
        list: [
          {title: 'Featured', value: 'featured'},
          {title: 'Archived', value: 'archived'},
          {title: 'Noteworthy', value: 'noteworthy'},
        ], // <-- predefined values
        layout: 'radio', // <-- defaults to 'dropdown'
      },
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [
        {
          name: 'chef',
          type: 'reference',
          to: {
            type: 'technologies',
          },
        },
      ],
    },
  ],
}
