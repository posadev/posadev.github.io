import React from 'react';
import { Download, Copy, Check } from 'lucide-react';
import Win from '@/components/Win';
import { useToast } from '@/hooks/use-toast';
import { pressKitLogos, pressKitColors, pressKitDecorations } from '@/data/pressKit';

const DownloadButton = ({ href, label }: { href: string; label: string }) => (
  <a href={href} download className="dl-btn">
    <Download className="w-3.5 h-3.5" aria-hidden="true" />
    {label}
  </a>
);

const ColorSwatch = ({ name, hex }: { name: string; hex: string }) => {
  const { toast } = useToast();
  const [copied, setCopied] = React.useState(false);

  const copyHex = async () => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopied(true);
      toast({ title: `${hex} copiado`, description: name });
      setTimeout(() => setCopied(false), 1500);
    } catch {
      toast({ title: 'No se pudo copiar', description: hex });
    }
  };

  return (
    <button type="button" className="color-swatch" onClick={copyHex} aria-label={`Copiar ${hex}`}>
      <span className="color-swatch-fill" style={{ background: hex }} />
      <span className="color-swatch-meta">
        <span className="color-swatch-hex">{copied ? <Check className="w-3.5 h-3.5" /> : hex}</span>
        <span className="color-swatch-name">{name}</span>
      </span>
    </button>
  );
};

const PressKit = () => (
  <Win
    title="📰 Kit-de-prensa.txt"
    footer={
      <>
        <span>{pressKitLogos.length} logos · {pressKitColors.length} colores · {pressKitDecorations.length} decoraciones</span>
        <span>edición 2026</span>
      </>
    }
  >
    <div className="sec-head">
      <h2>Kit de<br />prensa<em>.</em></h2>
      <p className="sec-sub">
        Ayúdanos a mantener viva la identidad de Posadev. Aquí encontrarás los logos, colores
        y decoraciones oficiales para que sigamos construyendo una imagen consistente en cada
        publicación, evento y espacio donde Posadev esté presente.
      </p>
    </div>

    <div className="presskit-logos">
      {pressKitLogos.map((logo) => (
        <div key={logo.name} className={`presskit-logo-card${logo.dark ? ' dark' : ''}`}>
          <img src={logo.image} alt={logo.name} />
          <DownloadButton href={logo.png} label="Descargar" />
        </div>
      ))}
    </div>

    <h3 className="presskit-subtitle">Colores</h3>
    <div className="presskit-colors">
      {pressKitColors.map((color) => (
        <ColorSwatch key={color.name} name={`${color.group} · ${color.name}`} hex={color.hex} />
      ))}
    </div>

    <h3 className="presskit-subtitle">Decoraciones</h3>
    <div className="presskit-decor-grid">
      {pressKitDecorations.map((decor) => (
        <div key={decor.name} className="decor-tile">
          <img src={decor.image} alt={decor.name} />
          <DownloadButton href={decor.file} label="Descargar" />
        </div>
      ))}
    </div>
  </Win>
);

export default PressKit;
