export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  fields: [
    {
      name: 'heroTitle',
      type: 'string',
      title: 'Hero Title',
    },
    {
      name: 'heroSubtitle',
      type: 'string',
      title: 'Hero Subtitle',
    },
    {
      name: 'description',
      type: 'string',
      title: 'description',
    },
    {
      name: 'abouMe',
      type: 'string',
      title: 'About Me',
    },
    {
      name: 'aboutMeTechnologies',
      type: 'string',
      title: 'About Me Technologies',
    },
    {
      name: 'profilePicture',
      type: 'image',
      title: 'Profile Picture',
      description: 'Please Upload a Square Picture. Ex: 400x400px',
      options: {
        hotspot: true,
      },
    },
  ],
}
