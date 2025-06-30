export default function Privacy() {
  return (
    <main className="flex flex-col max-w-300 w-full mx-auto px-4">
      <div className="flex flex-col mt-43 justify-center items-center gap-y-4">
        <h1 className="text-neutral-100 font-cormorant text-5xl md:text-7xl font-bold mb-3 font-pp">Privacy Policy</h1>
      </div>

      <div className="flex flex-col mt-10 pb-15 text-left justify-center items-left gap-y-4 border-b border-neutral-900">
        <h2 className="text-3xl text-neutral-300 font-semibold tracking-tight">
          初めに
        </h2>
        <p className="text-neutral-300 leading-7 [&:not(:first-child)]:mt-6">
          当プライバシーポリシーはサイトのみならず、当プライバシーポリシーのURLが提示されているツールやサービスにも適用されます。<br />
          ユーザーは、私（もしくは私たち、以下「私」）が提供するサービスを利用することで当プライバシーポリシーに同意したものとみなします。
        </p>
      </div>

      <div className="flex flex-col mt-10 pb-15 text-left justify-center items-left gap-y-4 border-b border-neutral-900">
        <h2 className="text-3xl text-neutral-300 font-semibold tracking-tight">
          個人情報の収集
        </h2>
        <p className="text-neutral-300 leading-7 [&:not(:first-child)]:mt-6">
          私は、ユーザーが送信した情報のほかにIPアドレスなども収集することがあります。
        </p>
      </div>

      <div className="flex flex-col mt-10 pb-15 text-left justify-center items-left gap-y-4 border-b border-neutral-900">
        <h2 className="text-3xl text-neutral-300 font-semibold tracking-tight">
          データの収集
        </h2>
        <p className="text-neutral-300 leading-7 [&:not(:first-child)]:mt-6">
          ユーザーが送信したデータは、サービスの改善やユーザーの体験向上のために使用されます。<br />
          保存されるデータには、ユーザーを特定することのできる情報は含まれないよう、匿名かされて保存されます。
          <br /><br />
          AI-xでは、ユーザーの会話を忘れないようにする目的で、ユーザーの会話が記録されています。保存されるデータに、ディスプレイ名やユーザー名などは含まれません。データを第三者に共有することもありません。
        </p>
      </div>

      <div className="flex flex-col mt-10 pb-15 text-left justify-center items-left gap-y-4 border-b border-neutral-900">
        <h2 className="text-3xl text-neutral-300 font-semibold tracking-tight">
          削除の申し立て
        </h2>
        <p className="text-neutral-300 leading-7 [&:not(:first-child)]:mt-6">
          ユーザーは、管理者に対して、サーバーからアクセスログを省いた自らがアップロードした全てのデータの削除を申し立てる事ができるものとします。
        </p>
      </div>

      <div className="flex flex-col mt-10 pb-15 text-left justify-center items-left gap-y-4 border-b border-neutral-900">
        <h2 className="text-3xl text-neutral-300 font-semibold tracking-tight">
          本規約の変更
        </h2>
        <p className="text-neutral-300 leading-7 [&:not(:first-child)]:mt-6">
          私は、当プライバシーポリシーを予告なく変更することのできる権利を有します。変更後は当ページに掲載した時点で効力が発生するものとします。
        </p>
      </div>

      <div className="flex flex-col mt-10 pb-15 text-left justify-center items-left gap-y-4 border-b border-neutral-900">
        <h2 className="text-3xl text-neutral-300 font-semibold tracking-tight">
          連絡先
        </h2>
        <p className="text-neutral-300 leading-7 [&:not(:first-child)]:mt-6">
          連絡の際は、以下メールアドレスまでお願いします。
          <p>info@ri0n.dev</p>
        </p>
      </div>

    </main>
  );
}
