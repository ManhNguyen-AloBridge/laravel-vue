import { MessageContext } from '@intlify/core-base';

export default {
  component: {
    navbar: {
      logout: 'Logout',
    },
    datatable: {
      info: '%{startIndex} 〜 %{endIndex} item/ %{total} items',
    },
  },
  constant: {
    permission: {
      admin: 'Admin',
      general: 'General',
    },
  },
  model: {
    user: {
      familyName: 'Family Name',
      firstName: 'First Name',
      name: 'Name',
      nameKana: 'Name (Kana)',
      email: 'Email',
      permission: 'Role',
      createdAt: 'Created at',
      updatedAt: 'Updated at',
      password: 'Password',
      passwordConfirm: 'Password (Confirm)',
    },
    notification:{
      title:'Title',
      message:'Message',
      deliverStart:'Deliver start',
      deliverEnd:'Deliver end',
      status:'Status',
    }
  },
  common: {
    search: 'Search',
    create: 'Create',
    edit: 'Edit',
    delete: 'Delete',
    cancel: 'Cancel',
    yes: 'Yes',
    no: 'No',
    space: '　',
  },
  view: {
    notFound: {
      pageTitle: 'Page not found',
      goBackHome: 'Go back home',
    },
    login: {
      email: 'Email',
      password: 'Password',
      rememberMe: 'Remember me',
      login: 'Login',
      forgotPassword: 'Forgot password',
      resetPassword: 'Reset password',
    },
    userList: {
      pageTitle: 'List user',
    },
    userDetail: {
      pageTitle: 'User detail',
      deleteUser: 'Delete user',
      confirmDelete: 'Are you sure about deleting this account?',
      deleteUserSuccess: 'Delete user success',
    },
    notificationList:{
      pageTitle: 'Notification list'
    },
    notificationDetail:{
      pageTitle: 'Notification detail',
      deleteNotification:'Delete notification',
      confirmDelete: 'Are you sure about deleting this notification?',
      deleteNotificationSuccess: 'Delete notification success',
      updateNotificationSuccess: 'Update notification success',
    }
  },
  helper: {
    concat: (ctx: MessageContext) => {
      const listArgument = [];
      let i = 0;
      let nextStr = ctx.list(i);
      while (nextStr) {
        listArgument.push(nextStr);
        nextStr = ctx.list(++i);
      }

      return listArgument.join(ctx.linked('common.space'));
    },
  },
};
