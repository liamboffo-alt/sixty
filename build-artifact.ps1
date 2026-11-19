# Bundles index.html + style.css + categories.js + app.js into one self-contained page
# for publishing as a Claude artifact (no <html>/<head>/<body> wrapper; the host adds it).
param([string]$Out = (Join-Path $PSScriptRoot 'dist\sixty.html'))

$root = $PSScriptRoot
$html = [IO.File]::ReadAllText((Join-Path $root 'index.html'))
$css  = [IO.File]::ReadAllText((Join-Path $root 'style.css'))
$cats = [IO.File]::ReadAllText((Join-Path $root 'categories.js'))
$app  = [IO.File]::ReadAllText((Join-Path $root 'app.js'))

$body = [regex]::Match($html, '(?s)<body>(.*)</body>').Groups[1].Value
$body = [regex]::Replace($body, '(?s)\s*<script src="[^"]+"></script>', '')
$fonts = [regex]::Match($html, '<link href="(https://fonts\.googleapis\.com/css2[^"]+)"').Groups[1].Value

$page = @"
<title>Sixty</title>
<meta name="claude:viewport-fit-sides" content="cover">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="$fonts">
<style>
$css
</style>
$body
<script>
$cats
</script>
<script>
$app
</script>
"@

New-Item -ItemType Directory -Force (Split-Path $Out) | Out-Null
[IO.File]::WriteAllText($Out, $page, (New-Object System.Text.UTF8Encoding $false))
Write-Host "Wrote $Out ($([math]::Round((Get-Item $Out).Length / 1KB)) KB)"
