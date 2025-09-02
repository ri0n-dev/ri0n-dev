import type { Metadata } from "next";
import { BlurFade } from "@/components/magicui/blur-fade";

export const metadata: Metadata = {
  title: "Terms of service",
};

export default function Tos() {
  return (
    <>
      <BlurFade delay={0.6}>
        <div className="container mx-auto py-8 max-w-4xl">
          <h1 className="text-3xl font-bold text-center">Terms of service</h1>
          <h1 className="text-xl mb-8 text-center text-neutral-500">Japanese Only</h1>

          <div className="prose prose-lg max-w-none">
            <p className="mb-8">
              本利用規約は、私が提供するウェブサイトおよびサービス（以下「本サービス」といいます。）の利用条件を定めるものです。利用された場合、以下の内容に同意したものとみなします。
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">第1条（自己責任）</h2>
              <p className="mb-4">
                ユーザーは、本サービスの利用に関して一切の責任を負うものとします。本サービスを利用したことによって生じた損害（直接的、間接的に問わないもの）について、私は一切の責任を負いません。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">第2条（免責事項）</h2>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>私は、本サービスの正確性、安全性、有用性を保証するものではありません。</li>
                <li>本サービスの利用に関してユーザーに発生したいかなる損害についても、私は一切の責任を負わないものとします。</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">第3条（禁止事項）</h2>
              <p className="mb-4">
                ユーザーは、本サービスに利用において以下の行為を行ってはなりません。
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>法令または公序良俗に違反する行為</li>
                <li>他のユーザーまたは第三者の権限を侵害する行為</li>
                <li>本サービスに運営を妨害する行為</li>
                <li>知的財産・プライバシーの侵害に当たる行為</li>
                <li>名誉毀損・差別・誹謗中傷・侮辱に当たる行為（第三者や私への信用毀損を含む）</li>
                <li>犯罪関与・法令違反に関連する行為</li>
                <li>スパム・迷惑行為（勧誘の大量送信、同内容の反復投稿、サービス外部への不当誘導）</li>
                <li>不正アクセス・セキュリティ侵害行為（サーバー・システムへの攻撃、脆弱性探索、アクセス制御回避）</li>
                <li>マルウェア・有害プログラムの利用・配布行為（ウイルス、ボット、スクリプト等）</li>
                <li>過度な負荷行為（自動化・スクレイピング・負荷試験等でインフラに過度な負担）</li>
                <li>リバースエンジニアリング等の禁止（逆コンパイル・逆アセンブル・解析、セキュリティ機構の回避）</li>
                <li>サービス改変・不正利用の禁止（機能妨害、パラメータ改ざん、外部ツールによる動作変更）</li>
                <li>なりすまし・虚偽申告の禁止（身元・資格の偽り、他者アカウントの使用）</li>
                <li>利用権の譲渡・再許諾の禁止（アカウント共有、権利の譲渡・移転、再販売）</li>
                <li>経済的損害・脅迫の禁止（第三者や運営に経済的損害を与える、威迫行為）</li>
                <li>その他の裁量条項（私が不適切と判断する行為を含める留保）</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">第4条（責任追及）</h2>
              <p className="mb-4">
                ユーザーが本サービスに利用により第三者との間にトラブルが生じさせた場合、ユーザー自身の責任と費用において解決するものとし、私はは一切の責任を追及しないものとします。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">第5条（個人情報の取り扱い）</h2>
              <p className="mb-4">
                私は、ユーザーから取得する情報は、法令に基づき適切に管理します。必要最小限の情報のみ取得し、目的以外には使用しません。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">第6条（未成年の利用）</h2>
              <p className="mb-4">
                未成年ユーザーが本サービスを利用する場合は、保護者の同意のもとで利用するものとします。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">第7条（規約の変更）</h2>
              <p className="mb-4">
                私は、必要に応じて本利用規約を変更できるものとします。変更後の規約は、本サービス上に表示した時点で効力を生じるものとし、ユーザーは定期的に本規約を確認する義務を負うものとします。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">第8条（準拠法・管轄）</h2>
              <p className="mb-4">
                本利用規約は日本法に準拠し、本サービスに関する紛争は札幌地方裁判所を第一審の専属管轄裁判所とします。
              </p>
            </section>
          </div>
        </div>
      </BlurFade>
    </>
  );
}
