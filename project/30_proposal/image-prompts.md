# 画像生成プロンプト & デザインアップデートガイド

> 各画像に **Midjourney / DALL-E / Stable Diffusion** 用と **Nano Banana (Gemini)** 用の2バージョンを用意。
> Nano Banana は自然言語プロンプト（特殊構文なし）。アスペクト比は API の `imageConfig.aspectRatio` で指定。

---

## 1. ヒーローメイン画像 (`assets/images/hero-main.jpg`)

### 現状
- About セクションのベントカードに使用
- 640x280 程度のアスペクト比で `object-cover` 表示
- `alt="温かい雰囲気の中でPCを囲んで談笑する若者たち"`

### 生成プロンプト (Midjourney / DALL-E / Stable Diffusion)

```
English:
A warm, softly lit community space in a Japanese public hall (公民館).
Young adults (early 20s) and a facilitator are gathered around a table with
laptops and tea cups. The atmosphere is relaxed and quiet — some people are
looking at screens, one person is reading a book, another is just sitting
peacefully. Natural light from large windows. Warm ivory and sage green
color palette. Shot from a gentle angle, slightly above. The style should
feel candid, documentary-like, not posed. Soft focus background.
No stock-photo smiles — genuine, quiet comfort.
--ar 16:7 --style raw --v 6.1

日本語参考:
日本の公民館の温かく照明されたコミュニティスペース。20代前半の若者数人と
ファシリテーターがテーブルを囲み、ノートPCとお茶がある。リラックスした
静かな雰囲気 — 画面を見る人、本を読む人、ただ座っている人。大きな窓からの
自然光。アイボリーとセージグリーンの色調。やや上からの自然なアングル。
ドキュメンタリータッチ、ポーズなし。作り笑顔なし — 本物の静かな安心感。
```

### 生成プロンプト (Nano Banana / Gemini)

```
Photorealistic, candid documentary photograph of a warm community space
inside a Japanese public hall (公民館). Five young Japanese adults in their
early twenties and one facilitator sit around a large wooden table with
open laptops and ceramic tea cups. One person gazes at their screen, another
reads a paperback, a third simply sits with hands around a warm cup. Large
windows let in soft, diffused natural daylight. The color palette is muted
warm ivory walls and sage green accents on cushions and a tablecloth.
Camera angle: slightly elevated, 35mm lens, f/2.8, shallow depth of field
with soft bokeh in the background. The mood is quiet and safe — no posed
smiles, no eye contact with camera. Warm color temperature around 5800K.
No text, no watermark, no stock-photo feel.
```
- **アスペクト比**: `16:9`（API: `"aspectRatio": "16:9"`）
- **モデル推奨**: Nano Banana Pro（高解像度・フォトリアルに強い）

### 要件
- **サイズ**: 1280x560px 以上（Retinaで2560x1120px推奨）
- **フォーマット**: WebP（フォールバック用JPEG）
- **ファイルサイズ目標**: 150KB以下（WebP）、400KB以下（JPEG）
- **色調**: FAF8F5（アイボリー）に馴染むウォームトーン
- **NG要素**: 暗い照明、蛍光灯色、空っぽの部屋、過度にポジティブな表情

---

## 2. 活動イメージ素材（将来追加用）

### 2a. AIバイブコーディング風景

**Midjourney / DALL-E / SD:**
```
A young person (early 20s, Japanese) sitting at a laptop, screen showing
colorful code. They look curious and engaged, not stressed. A cup of tea
next to the laptop. Warm, soft lighting. The background shows a cozy
community space with wooden tables. Sage green and ivory palette.
Candid documentary style.
--ar 4:3 --style raw --v 6.1
```

**Nano Banana:**
```
Photorealistic candid photograph of a young Japanese person in their early
twenties sitting at a wooden table in a cozy community space, looking at a
laptop screen that displays colorful lines of code. Their expression is
curious and relaxed, not stressed. A ceramic cup of green tea sits beside
the laptop. Warm, soft natural light from a nearby window. The background
shows other wooden tables and chairs in an ivory-walled room with sage
green cushions. Shot at eye level, 50mm lens, f/2.0, shallow depth of
field. Documentary style, not posed. No text, no watermark.
```
- **アスペクト比**: `4:3`

### 2b. ボードゲーム（PlayAssess）風景

**Midjourney / DALL-E / SD:**
```
Overhead view of a board game session (Settlers of Catan) on a wooden table
in a Japanese community space. Hands of young people and an adult facilitator
visible. Colorful game pieces and cards. Warm, inviting atmosphere with
natural light. Teal and terracotta accents in the environment.
Documentary style, soft focus edges.
--ar 4:3 --style raw --v 6.1
```

**Nano Banana:**
```
Photorealistic overhead flat-lay photograph looking straight down at a
Settlers of Catan board game in progress on a warm wooden table. Six pairs
of hands are visible — young people and one adult facilitator — reaching
for colorful hexagonal tiles, wooden settlement pieces, and resource cards.
The setting is a bright Japanese community space with natural daylight.
Small details: a teal pencil case and a terracotta-colored notebook at the
table edge. Warm, inviting color temperature. Soft vignette at the edges.
Documentary style, candid. No faces visible, only hands and the game board.
No text, no watermark.
```
- **アスペクト比**: `4:3`

### 2c. お茶・談話風景

**Midjourney / DALL-E / SD:**
```
Two young adults sitting at a small table with Japanese green tea and
simple snacks (senbei, cookies). One person is talking quietly, the other
is listening. The setting is a simple Japanese public hall with large
windows. The mood is peaceful and unhurried. Warm ivory tones, soft
natural light. No forced interaction — comfortable silence is fine.
--ar 4:3 --style raw --v 6.1
```

**Nano Banana:**
```
Photorealistic candid photograph of two young Japanese adults in their
twenties sitting across from each other at a small wooden table. On the
table: two cups of green tea and a small plate of senbei rice crackers.
One person speaks softly while the other listens with a calm, attentive
expression. The setting is a simple Japanese public hall with large
windows letting in warm afternoon sunlight. Ivory walls, minimal
decoration. Camera at a low angle from the side, 85mm lens, f/1.8,
beautiful bokeh. The mood is peaceful and unhurried — comfortable silence.
No forced smiles, no exaggerated gestures. No text, no watermark.
```
- **アスペクト比**: `4:3`

### 2d. 「なにもしない」風景

**Midjourney / DALL-E / SD:**
```
A young person sitting by a window in a Japanese community space, looking
outside peacefully. They have headphones around their neck and a book on
the table. A cup of tea nearby. The light is golden-hour warm. The mood
is contemplative and safe. No expectation, no activity. Just existing.
Warm sage green and ivory palette. Candid style, slightly out of focus.
--ar 4:3 --style raw --v 6.1
```

**Nano Banana:**
```
Photorealistic photograph of a young Japanese person sitting alone by a
large window in a quiet community space, gazing peacefully outside.
Over-ear headphones rest around their neck. A closed paperback book and
a half-finished cup of tea sit on the wooden table. Golden-hour sunlight
streams through the window, casting long warm shadows. The room has ivory
walls and a sage green curtain. Camera positioned at medium distance,
35mm lens, f/2.8. Slightly soft focus on the person, sharper on the
window light. The mood is contemplative, safe, and unhurried — just
existing, no activity expected. No text, no watermark.
```
- **アスペクト比**: `4:3`

---

## 3. OG画像 (`assets/images/og-image.jpg`)

### 生成プロンプト (Midjourney / DALL-E / SD)
```
A simple, clean graphic card for social media sharing.
Background: warm ivory (#FAF8F5) with subtle sage green gradient orbs.
Center text: "ここにいていいと、思える場所。" in rounded Japanese font.
Below: "ギフテッドスペース | 市川市 毎週土曜日" in smaller text.
A small sun icon in sage green. Minimalist, warm, inviting.
Aspect ratio 1200x630px (og:image standard).
--ar 1200:630 --style raw --v 6.1
```

### 生成プロンプト (Nano Banana / Gemini)
```
Clean, minimalist social media share card. Warm ivory background color
(#FAF8F5) with two subtle, large, soft-edged gradient orbs — one sage
green (#6B8F71) in the upper right, one light terracotta (#E09960) in
the lower left, both at very low opacity. In the center, bold rounded
Japanese text "ここにいていいと、思える場所。" in dark warm gray. Below
it in smaller text: "ギフテッドスペース | 市川市 毎週土曜日". A small,
simple sun icon in sage green above the main text. Flat graphic design
style, no photographs, no 3D effects. No watermark.
```
- **アスペクト比**: `16:9`（1200x630に近似）
- **注意**: Nano Banana はテキスト描画の精度に限界あり。生成後 Figma/Canva でテキスト差し替え推奨

### テキストオーバーレイ代替案
AIで画像を生成し、Figma/Canvaでテキストをオーバーレイ:
- 背景: メッシュグラデーション（セージ・テラコッタ・パープルの光球）
- フォント: Zen Maru Gothic 700
- メインコピー: 「ここにいていいと、思える場所。」
- サブ: ギフテッドスペース | 千葉県市川市 | 毎週土曜 13:30〜
- ロゴアイコン: Sun（太陽）をセージ→テラコッタグラデーション

### 要件
- **サイズ**: 1200x630px（OGP標準）
- **フォーマット**: JPEG（SNS互換性のため）
- **ファイルサイズ**: 200KB以下

---

## 4. ファビコン / ロゴ

### 現状
ファビコン未設定。ナビバーのロゴはLucide `sun` アイコン + セージグラデーション背景。

### 生成プロンプト (Midjourney / DALL-E / SD)
```
Minimalist logo icon for "Gifted Space" (ギフテッドスペース), a Japanese
youth support community. A simple, warm sun shape with gentle rays,
using sage green (#6B8F71) to warm terracotta (#C87941) gradient.
Rounded, friendly style — not corporate. White background.
The feeling should be "safe, warm, gentle sunrise."
SVG-style clean vector. Square format for favicon use.
--ar 1:1 --style raw --v 6.1
```

### 生成プロンプト (Nano Banana / Gemini)
```
Minimalist vector-style logo icon on a pure white background. A simple,
warm sun shape with 8 short rounded rays, colored with a smooth gradient
from sage green (#6B8F71) on the left to warm terracotta (#C87941) on the
right. The sun circle is solid with the gradient fill. The rays are soft
and rounded, not sharp or geometric. The overall style is friendly,
approachable, and non-corporate — suitable for a youth community
organization. Clean edges, flat design, no shadows, no text, no 3D
effects, no watermark. Square composition.
```
- **アスペクト比**: `1:1`
- **モデル推奨**: Nano Banana Pro（ベクター風のクリーンさに強い）
- **注意**: 生成後にベクター化ツール（Vectorizer.ai 等）でSVGに変換推奨

### ファビコン仕様
- `favicon.ico`: 16x16, 32x32, 48x48 マルチサイズ
- `apple-touch-icon.png`: 180x180
- `favicon-192.png`: 192x192 (PWA用)
- `favicon-512.png`: 512x512 (PWA用)
- カラー: セージグリーン背景 + 白サンアイコン

---

## 5. デザインアップデートアプローチ

### v5.0 "Pop & Warm" で適用済みのテクニック

| # | テクニック | 実装状態 |
|:--|:---------|:--------|
| 1 | 大きな角丸 (rounded-3xl / 24px) | 適用済 |
| 2 | セクション背景にソフトグラデーションウォッシュ | 適用済 |
| 3 | 浮遊オーブ (blur blob + animation) | 適用済 |
| 4 | 丸ゴシック (Zen Maru Gothic) ヒーロータグライン | 適用済 |
| 5 | スタガード Scroll-Reveal | 適用済 |
| 6 | 呼吸アニメーション (CTAボタン) | 適用済 |
| 7 | カードホバー rotate(-0.5deg) + translateY | 適用済 |
| 8 | セクションごとの色テーマ (sage/terra/teal/purple) | 適用済 |
| 9 | グラスモーフィズム (navbar, CTA) | 適用済 |
| 10 | Founder引用の装飾的クォートマーク | 適用済 |
| 11 | アイコン背景グラデーション | 適用済 |
| 12 | 統一ピルバッジヘッダーパターン | 適用済 |
| 13 | ライブインジケーター (animate-ping) | 適用済 |
| 14 | モバイル full-width pill CTA | 適用済 |

### 次のステップ（v5.1以降で検討）

| # | テクニック | 優先度 | 説明 |
|:--|:---------|:------|:-----|
| 1 | 実写写真の差し替え | 高 | AI生成 or 実際の活動写真。About/Activities に配置 |
| 2 | OG画像の作成・設定 | 高 | SNSシェア時の見栄え。og:image メタタグ追加 |
| 3 | ファビコン設定 | 高 | ブランド認知。ブラウザタブの見栄え |
| 4 | Tailwind本番ビルド | 高 | CDN → npx tailwindcss で軽量化 |
| 5 | 活動セクションに実写カード | 中 | グラデーション背景 → 実際の活動風景 |
| 6 | 参加者の声セクション | 中 | ソーシャルプルーフ。装飾クォート付き |
| 7 | 動画背景 (Hero) | 低 | 15秒ループの雰囲気動画。パフォーマンス注意 |
| 8 | ローディングアニメーション | 低 | ページ初回読み込み時の遷移効果 |
| 9 | Lottieアニメーション | 低 | アイコンを軽量アニメーションに置き換え |

---

## 6. 写真撮影ガイドライン（実際の活動時）

### トーン & ムード
- **自然光**を最優先。窓際での撮影を心がける
- **キャンディッド（自然体）**: ポーズさせない。活動中の自然な瞬間を撮る
- **距離感**: 近すぎない。プライバシーに配慮した構図
- **表情**: 作り笑顔NG。静かな集中や自然な微笑みを

### 構図パターン
1. **俯瞰**: テーブル上のPC・お茶・ゲームを上から
2. **斜め上**: 空間全体の雰囲気が伝わるアングル
3. **窓際**: 自然光 + シルエット（匿名性確保）
4. **手元**: キーボードを打つ手、ゲームの駒を動かす手

### 色温度
- ホワイトバランス: やや暖色（5500-6000K）
- 後処理: 彩度控えめ、ハイライト暖色、シャドウをセージグリーン寄りに

### プライバシー配慮
- 顔出しは本人の明示的同意が必要
- 顔が映る場合はぼかし or シルエット
- 個人情報（PC画面の内容等）が映り込まないよう注意
- 未成年者は保護者の同意必須

---

## 7. カラーパレット早見表（画像編集用）

```
背景 ivory:     #FAF8F5  rgb(250, 248, 245)
surface:        #F0EBE3  rgb(240, 235, 227)
sage green:     #6B8F71  rgb(107, 143, 113)
sage light:     #8BB08F  rgb(139, 176, 143)
sage dark:      #4A6B4E  rgb(74, 107, 78)
terracotta:     #C87941  rgb(200, 121, 65)
terra light:    #E09960  rgb(224, 153, 96)
purple hope:    #9B8EC4  rgb(155, 142, 196)
teal playassess:#2BA5A5  rgb(43, 165, 165)
text dark:      #2D2A26  rgb(45, 42, 38)
text secondary: #6B6560  rgb(107, 101, 96)
text muted:     #9B9590  rgb(155, 149, 144)
```
