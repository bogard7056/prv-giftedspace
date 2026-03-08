# ビジュアル戦略: ギフテッドスペース LP v5.0

## テーマ: Pop & Warm — World-Class NPO

## コンセプトキーワード
- 心理的安全性（Psychological Safety）
- ポップで温かい（Pop & Warm）
- 有機的な動き（Organic Motion）
- 段階的開示（Progressive Disclosure）
- 任意団体らしい親しみやすさ（Approachable Community）

## ムードボード方針
- **カラー方向性**: ウォームアイボリー基調、セージグリーンとテラコッタのアクセント。セクションごとに色テーマを変える（sage/terra/teal/purple）
- **写真スタイル**: 自然光、ソフトフォーカス、温かみのある色調。人物は距離感を持たせたキャンディッド
- **レイアウト傾向**: 大きな角丸 (24px+)、グラデーション背景、浮遊オーブ。ポップで柔らかい印象
- **タイポグラフィ方向**: Zen Maru Gothic（ヒーロー見出し）+ Noto Sans JP（本文）+ Shippori Mincho B1（引用アクセント）

## フォントシステム

| 用途 | フォント | ウェイト | サイズ |
|:---|:---|:---|:---|
| ヒーロー見出し | Zen Maru Gothic | 700 | clamp(2.5rem, 6vw, 4.5rem) |
| セクション見出し | Noto Sans JP | 900 | 2rem-3.125rem |
| 引用・アクセント | Shippori Mincho B1 | 700 | 1.25rem |
| 本文 | Noto Sans JP | 400 | 1rem (16px) |
| UI要素・バッジ | Noto Sans JP | 500-700 | 0.75rem-1rem |

## カラーシステム

```css
:root {
  /* Base - Natural Warmth */
  --color-bg: #FAF8F5;
  --color-surface: #F0EBE3;
  --color-surface-raised: #FFFFFF;

  /* Text - Warm Grays */
  --color-text: #2D2A26;
  --color-text-secondary: #6B6560;
  --color-text-muted: #9B9590;

  /* Primary - Sage Green (Safety & Growth) */
  --color-primary: #6B8F71;
  --color-primary-light: #8BB08F;
  --color-primary-dark: #4A6B4E;

  /* Accent - Warm Terracotta */
  --color-accent: #C87941;
  --color-accent-light: #E09960;
  --color-accent-dark: #A05C2E;

  /* Supporting */
  --color-trust: #5B8FB9;
  --color-hope: #9B8EC4;
  --color-playassess: #2BA5A5;
}
```

## セクション色テーマ

| セクション | 背景 | アクセント |
|:---------|:-----|:---------|
| Hero | メッシュグラデーション + 浮遊オーブ | sage/terra/purple |
| Numbers | bg-white | 各色混在 |
| About | bg-white | sage |
| Empathy | sage-50/sand-50/terra-50 グラデーション | sage (当事者) / terra (保護者) |
| Founder | bg-white | sage |
| Activities | sand-50 → white グラデーション | sage/purple/terra/sky |
| PlayAssess | bg-white | teal |
| Promise | sage-50 グラデーション | 各色混在 |
| Vision | bg-white | sage/purple/terra |
| FAQ | sand-50 → white グラデーション | sage |
| CTA | stone-900 + 浮遊オーブ | sage/terra |

## ヒーローセクション構成
- **選定パターン**: センター配置フルスクリーン + 浮遊オーブ背景
- 丸ゴシック (Zen Maru Gothic) のメインコピー + グラデーションテキスト
- 呼吸アニメーション付きCTAボタン
- ライブインジケーター (animate-ping) 「毎週土曜 開催中」
- ピルバッジ型トラストバッジ (見学無料・予約不要・参加費)
- 保護者向けサブリンク

## UIパターン

### 統一ヘッダーパターン
各セクションのヘッダーは以下で統一:
```
<p class="inline-flex items-center ... bg-{color}-50 px-4 py-1.5 rounded-full">
  <icon /> <span>セクション名</span>
</p>
<h2>見出し</h2>
```

### カード共通スタイル
- 角丸: rounded-3xl (24px)
- ボーダー: border-{color}-100/60 (半透明)
- シャドウ: shadow-sm → hover: shadow-lg/shadow-xl
- アイコン: グラデーション背景 (bg-gradient-to-br)
- ホバー: translateY(-3~5px) + rotate(-0.5deg)

## モーション方針
- Staggered Fade-in-up: 100ms stagger, `cubic-bezier(0.22, 1, 0.36, 1)`
- 浮遊オーブ: 20秒周期の有機的なフロート
- CTAボタン: 3秒周期の呼吸アニメーション (box-shadow 変化)
- カード: hover時 translateY(-5px) + rotate(-0.5deg) + shadow昇格
- スクロールインジケーター: 2秒周期のバウンス
- prefers-reduced-motion: 即座に表示、全アニメーション無効

## Anti-Slop チェック v5.0
- [x] デフォルト Inter/Roboto 不使用 → Zen Maru Gothic + Noto Sans JP + Shippori Mincho B1
- [x] 白+紫グラデーション回避 → アイボリー + セージ + テラコッタ
- [x] 均一 border-radius 回避 → rounded-xl (ボタン) / rounded-2xl (バッジ) / rounded-3xl (カード)
- [x] モーション/トランジション有り → Staggered reveal + hover effects + breathing CTA + floating orbs
- [x] 均一グリッドのみ回避 → フルスクリーンヒーロー + ベントグリッド + 4列グリッド + タイムライン
- [x] フラット背景回避 → メッシュグラデーション + セクション間グラデーション遷移
- [x] 企業感回避 → 丸ゴシック + 有機的オーブ + 柔らかい影 + 回転ホバー
