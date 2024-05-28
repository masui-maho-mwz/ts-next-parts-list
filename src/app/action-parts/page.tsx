import { PageContainer } from "@/app/shared/components/page-container";
import { PartsSampleContainer } from "@/app/shared/components/parts-sample-container";
import { Button } from "@/components/elements/buttons/button";
import { TextField } from "@/components/forms/texts/text-field";

export default function ActionPartsPage() {
  return (
    <PageContainer>
      <h1>アクション系パーツ</h1>
      <p>
        ボタンやフォームアイテムなどのユーザー動作を促すパーツをスタイルで作成してみましょう。
      </p>
      <p>
        アクション系のパーツを作成する際は以下の点に注意して作成するのがコツです。
      </p>
      <ul>
        <li>通常の見た目だけでなくカーソルをあわせた際の動作なども考慮する</li>
        <li>無効化 (disabled) 状態なども考慮する</li>
        <li>
          適切なタグを考慮する
          <ul>
            <li>リンクは a タグを使用する</li>
            <li>
              JavaScript でクリック動作を実装する場合は button タグを使用する
              など
            </li>
          </ul>
        </li>
        <li>
          クリックできるエリアなど、動作の範囲は適切か
          <ul>
            <li>
              a タグに display: block;
              を適用すると意図せぬ余白部分がクリック範囲になってしまったりする
            </li>
          </ul>
        </li>
      </ul>

      <section>
        <h2>ボタン</h2>
        <PartsSampleContainer>
          <Button type="button" value="ボタンパターン" />
          <Button type="button" value="ボタン (disabled) パターン" isDisabled />
          <Button type="link" href="/" value="リンクパターン" />
          <Button
            type="link"
            href="https://tech-quest.club"
            value=" 別タブリンクパターン"
            target="_blank"
          />
        </PartsSampleContainer>
      </section>

      <section>
        <h2>テキスト入力</h2>
        <PartsSampleContainer>
          <TextField type="text" name="text-field" />
          <TextField type="password" name="password-field" />
          <TextField type="email" name="email-field" />
          <TextField type="text" name="disabled-text-field" disabled />
        </PartsSampleContainer>
      </section>

      <section>
        <h2>テキスト入力 (複数行)</h2>
        <PartsSampleContainer>
          ここに作成したコンポーネントを記述
        </PartsSampleContainer>
      </section>

      <section>
        <h2>プルダウン</h2>
        <PartsSampleContainer>
          ここに作成したコンポーネントを記述
        </PartsSampleContainer>
      </section>

      <section>
        <h2>ラジオボタン</h2>
        <PartsSampleContainer>
          ここに作成したコンポーネントを記述
        </PartsSampleContainer>
      </section>

      <section>
        <h2>チェックボックス</h2>
        <PartsSampleContainer>
          ここに作成したコンポーネントを記述
        </PartsSampleContainer>
      </section>
    </PageContainer>
  );
}
