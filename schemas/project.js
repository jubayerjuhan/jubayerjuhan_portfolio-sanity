export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {name: 'name', title: 'Name', type: 'string'},
    {name: 'description', title: 'Description', type: 'string'},
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
          name: 'technology',
          type: 'reference',
          to: {
            type: 'technologies',
          },
        },
      ],
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
