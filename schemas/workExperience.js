export default {
  name: 'experiences',
  title: 'Experiences',
  type: 'document',
  fields: [
    {name: 'company', title: 'Company', type: 'string'},
    {name: 'position', title: 'Position', type: 'string'},
    {name: 'duration', title: 'Duration', type: 'string'},
    {
      name: 'bullets',
      title: 'Bullet Points',
      type: 'array',
      of: [{name: 'bulletText', title: 'Bullet Text', type: 'string'}],
    },
  ],
}
