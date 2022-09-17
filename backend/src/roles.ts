import { AccessControl } from 'accesscontrol'

const ac = new AccessControl()

// student permissions
ac.grant('student').updateOwn('profile').readOwn('profile')
// admin permissions
ac.grant('admin')
  .extend('student')
  .readAny('profile')
  .delete('student', 'profile')
  .update('student', 'profile')

// superadmin permissions
ac.grant('superadmin')
  .extend('admin')
  .update('admin', 'profile')
  .delete('admin', 'profile')

export default ac
