import type { Metadata } from "next";
import { BlurFade } from "@/components/magicui/blur-fade";

export const metadata: Metadata = {
    title: "Privacy Policy",
};

export default function Privacy() {
    return (
        <>
            <BlurFade delay={0.6}>
                <div className="container mx-auto py-8 max-w-4xl">
                    <h1 className="text-3xl font-bold text-center">Privacy Policy</h1>
                    <h1 className="text-xl mb-8 text-center text-neutral-500">Japanese Only</h1>

                    <div className="prose prose-lg max-w-none">
                        <p className="mb-8">
                            本プライバシーポリシーは、私が提供するウェブサイトおよびサービス（以下「本サービス」といいます。）に適応されます。利用された場合、以下の内容に同意したものとみなします。
                        </p>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">収集する情報</h2>
                            <p className="mb-4">
                                本サービスでは、以下の情報を収集する場合があります。
                            </p>
                            <ul className="list-disc list-inside mb-4 space-y-2">
                                <li>ユーザーがフォーム等に入力、送信した情報</li>
                                <li>アクセス解析ツール等により自動的に取得される情報（Cookie、IPアドレス、User-Agent等）</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">利用目的</h2>
                            <p className="mb-4">
                                本サービスでは、収集した情報を以下の目的で利用します。
                            </p>
                            <ul className="list-disc list-inside mb-4 space-y-2">
                                <li>本サービスの提供、運営、改善</li>
                                <li>バグや不具合の特定、改善</li>
                                <li>利用状況の分析</li>
                                <li>必要に応じたユーザーへのコンタクト</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">第三者提供</h2>
                            <p className="mb-4">
                                法令に基づく場合を除き、ユーザーの同意なく第三者に個人情報を提供することはありません。
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">情報の正確性に関する免責</h2>
                            <p className="mb-4">
                                本サービスは可能な限り情報の正確性に心がけていますが、安全性や確実性を保証するものではありません。掲載された情報によって生じた損害等の一切の責任を負いかねますのでご了承ください。
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">外部リンクに関する免責</h2>
                            <p className="mb-4">
                                本サービスからリンクやバナーなどによって他のウェブサイトに移動した場合、移動先で提供される情報、サービス等についての責任は一切負いかねます。
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">免責事項</h2>
                            <p className="mb-4">
                                本サービスの利用により発生したいかなる損害についても、私は一切の責任を負いません。ユーザーは自己の責任において本サービスを利用するものとします。
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">ポリシーの変更</h2>
                            <p className="mb-4">
                                私は、必要に応じて本ポリシーを変更できるものとします。変更後のポリシーは、本サービス上に表示した時点で効力を生じるものとし、ユーザーは定期的に本ポリシーを確認する義務を負うものとします。
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">管轄裁判所</h2>
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
