import { MessageContext } from '@intlify/core-base';

export default {
  component: {
    navbar: {
      logout: 'Logout',
    },
    datatable: {
      info: '%{startIndex} 〜 %{endIndex} 件を表示/ %{total} 件中',
    },
  },
  constant: {
    permission: {
      admin: '管理者',
      general: '一般',
    },
  },
  model: {
    user: {
      familyName: 'Family Name',
      firstName: 'First Name',
      name: '氏名',
      nameKana: '氏名（かな)',
      email: '管理アカウントID',
      permission: '権限',
      createdAt: '登録日時',
      updatedAt: '更新日時',
      password: 'パスワード',
      passwordConfirm: 'パスワード（確認用)',
    },
    notification:{
      title:'通知タイトル',
      message:'メッセージ',
      deliverStart:'配信開始',
      deliverEnd:'配信終了',
      status:'状態',
    }
  },
  common: {
    search: '検索',
    create: '新規作成',
    edit: '編集',
    cancel: 'キャンセル',
    yes: 'はい',
    no: 'いいえ',
    space: '　',
  },
  view: {
    notFound: {
      pageTitle: 'ページが見つかりません',
      goBackHome: '家に帰る',
    },
    login: {
      email: 'メールアドレス',
      password: 'パスワード',
      rememberMe: 'Remember me',
      login: 'ログイン',
      forgotPassword: 'パスワードをお忘れの方',
      resetPassword: 'アカウントの新規登録',
    },
    userList: {
      pageTitle: '管理アカウント',
    },
    userDetail: {
      pageTitle: '管理アカウント詳細',
      deleteUser: 'ユーザーを削除',
      confirmDelete: 'アカウントを削除しますか？',
      deleteUserSuccess: 'ユーザーの成功を削除',
    },
    notificationList:{
      pageTitle: '通知リスト'
    },
    notificationDetail:{
      pageTitle: '通知の詳細',
      deleteNotification:'通知を削除',
      confirmDelete:'この通知を削除してもよろしいですか?',
      deleteNotificationSuccess:'通知の削除成功',
      updateNotificationSuccess: '更新通知の成功',
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
