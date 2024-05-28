import { PageContainer } from "@/app/shared/components/page-container";
import { PartsSampleContainer } from "@/app/shared/components/parts-sample-container";
import { Heading } from "@/components/elements/headings/heading";
import { HeadingWithLeftLine } from "@/components/elements/headings/heading-with-left-line";
import { HeadingWithLineIcon } from "@/components/elements/headings/heading-with-line-icon";
import { HeadingWithShortUnderline } from "@/components/elements/headings/heading-with-short-underline";
import { HeadingWithUnderline } from "@/components/elements/headings/heading-with-underline";
import { LeadText } from "@/components/elements/typographies/lead-text";

export default function TypographyPartsPage() {
  return (
    <PageContainer>
      <h1>テキスト系パーツ</h1>
      <p>よくあるテキストパーツのパターンをスタイルで作成してみましょう。</p>
      <p>テキスト系パーツを作る際は以下の点に注意して作成するのがコツです。</p>
      <ul>
        <li>
          文量が多い場合や改行をして複数行になった場合にどういう見た目になっているべきかをイメージする
          <ul>
            <li>
              Heightを指定してしまうと、複数行の際に文字が消えてしまったり表示エリアをはみ出したりすることがある
            </li>
            <li>
              文頭にアイコンを付ける場合等は複数行のときに上下中央とすべきなのか、上寄せにするのか
            </li>
            <li>折り返した2行目移行の文頭の位置をどこにするか</li>
          </ul>
        </li>
        <li>
          簡単なアイコンは疑似要素 (::before や ::after) を使用して表現する
        </li>
      </ul>

      <section>
        <h2>通常見出し</h2>
        <PartsSampleContainer>
          <Heading variant="h1" value="H1 見出し" />
          <Heading variant="h2" value="H2 見出し" />
          <Heading variant="h3" value="H3 見出し" />
          <Heading variant="h4" value="H4 見出し" />
          <Heading variant="h5" value="H5 見出し" />
          <Heading variant="h6" value="H6 見出し" />
        </PartsSampleContainer>
      </section>

      <section>
        <h2>下線付き見出し</h2>
        <PartsSampleContainer>
          <HeadingWithUnderline variant="h1" value="H1 見出し" />
          <HeadingWithUnderline
            variant="h1"
            value="文量テスト文量テスト文量テスト文量テスト文量テスト文量テスト文量テスト文量テスト文量テスト文量テスト"
          />
          <HeadingWithUnderline variant="h2" value="H2 見出し" />
          <HeadingWithUnderline variant="h3" value="H3 見出し" />
          <HeadingWithUnderline variant="h4" value="H4 見出し" />
          <HeadingWithUnderline variant="h5" value="H5 見出し" />
          <HeadingWithUnderline variant="h6" value="H6 見出し" />
        </PartsSampleContainer>
      </section>

      <section>
        <h2>左線付きテキスト</h2>
        <PartsSampleContainer>
          <HeadingWithLeftLine
            variant="h1"
            value="H1 見出し"
          ></HeadingWithLeftLine>
          <HeadingWithLeftLine
            variant="h1"
            value="文量テスト文量テスト文量テスト文量テスト文量テスト文量テスト文量テスト文量テスト文量テスト文量テスト"
          ></HeadingWithLeftLine>
          <HeadingWithLeftLine
            variant="h2"
            value="H2 見出し"
          ></HeadingWithLeftLine>
          <HeadingWithLeftLine
            variant="h3"
            value="H3 見出し"
          ></HeadingWithLeftLine>
          <HeadingWithLeftLine
            variant="h4"
            value="H4 見出し"
          ></HeadingWithLeftLine>
          <HeadingWithLeftLine
            variant="h5"
            value="H5 見出し"
          ></HeadingWithLeftLine>
          <HeadingWithLeftLine
            variant="h6"
            value="H6 見出し"
          ></HeadingWithLeftLine>
        </PartsSampleContainer>
      </section>

      <section>
        <h2>線形アイコン付き見出し</h2>
        <PartsSampleContainer>
          <HeadingWithLineIcon
            variant="h1"
            value="H1 見出し"
          ></HeadingWithLineIcon>
          <HeadingWithLineIcon
            variant="h1"
            value="文量テスト文量テスト文量テスト文量テスト文量テスト文量テスト文量テスト文量テスト文量テスト文量テスト"
          ></HeadingWithLineIcon>
          <HeadingWithLineIcon
            variant="h2"
            value="H2 見出し"
          ></HeadingWithLineIcon>
          <HeadingWithLineIcon
            variant="h3"
            value="H3 見出し"
          ></HeadingWithLineIcon>
          <HeadingWithLineIcon
            variant="h4"
            value="H4 見出し"
          ></HeadingWithLineIcon>
          <HeadingWithLineIcon
            variant="h5"
            value="H5 見出し"
          ></HeadingWithLineIcon>
          <HeadingWithLineIcon
            variant="h6"
            value="H6 見出し"
          ></HeadingWithLineIcon>
        </PartsSampleContainer>
      </section>

      <section>
        <h2>短下線付き見出し</h2>
        <PartsSampleContainer>
          <HeadingWithShortUnderline
            variant="h1"
            value="H1 見出し"
          ></HeadingWithShortUnderline>
          <HeadingWithShortUnderline
            variant="h1"
            value="文量テスト文量テスト文量テスト文量テスト文量テスト文量テスト文量テスト文量テスト文量テスト文量テスト"
          ></HeadingWithShortUnderline>
          <HeadingWithShortUnderline
            variant="h2"
            value="H2 見出し"
          ></HeadingWithShortUnderline>
          <HeadingWithShortUnderline
            variant="h3"
            value="H3 見出し"
          ></HeadingWithShortUnderline>
          <HeadingWithShortUnderline
            variant="h4"
            value="H4 見出し"
          ></HeadingWithShortUnderline>
          <HeadingWithShortUnderline
            variant="h5"
            value="H5 見出し"
          ></HeadingWithShortUnderline>
          <HeadingWithShortUnderline
            variant="h6"
            value="H6 見出し"
          ></HeadingWithShortUnderline>
        </PartsSampleContainer>
      </section>

      <section>
        <h2>リードテキスト</h2>
        <PartsSampleContainer>
          <LeadText value="リードテキスト" />
          <LeadText value="文量テスト文量テスト文量テスト文量テスト文量テスト文量テスト文量テスト文量テスト文量テスト文量テスト" />
        </PartsSampleContainer>
      </section>

      <section>
        <h2>アラートメッセージ</h2>
        <PartsSampleContainer>
          ここに作成したコンポーネントを記述
        </PartsSampleContainer>
      </section>

      <section>
        <h2>箇条書きリスト</h2>
        <PartsSampleContainer>
          ここに作成したコンポーネントを記述
        </PartsSampleContainer>
      </section>

      <section>
        <h2>数字付き順序リスト</h2>
        <PartsSampleContainer>
          ここに作成したコンポーネントを記述
        </PartsSampleContainer>
      </section>
    </PageContainer>
  );
}
