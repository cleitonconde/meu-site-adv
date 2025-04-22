export default function MapaEscritorio() {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6 mt-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Localização do Escritório</h2>
        <p className="text-gray-600 mb-4">
          Rua Siqueira Campos, 358, Centro - Mogi Guaçu - SP
        </p>
        <div className="w-full h-[400px] rounded-lg overflow-hidden">
          <iframe
            title="Mapa do Escritório"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.4007107982457!2d-46.94406022393114!3d-22.370950620304594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c88973ce215fbf%3A0x9c70df89b899e57!2sR.%20Siqueira%20Campos%2C%20358%20-%20Centro%2C%20Mogi%20Gua%C3%A7u%20-%20SP%2C%2013800-160!5e0!3m2!1spt-BR!2sbr!4v1713792752977!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    );
  }
  