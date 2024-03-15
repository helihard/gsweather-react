function Description() {
  return (
    <div id="about">
      <p>
        Datan är hämtad från&nbsp;
        <a href="https://opendata.smhi.se/apidocs/metobs/" target="_blank">
          SMHI Open Data API Docs – Meteorological Observations
        </a>
        .<br />
        Delad och bearbetad enligt&nbsp;
        <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">
          Creative Commons-licens CC BY 4.0
        </a>
        . Fullständiga villkor för användning finns&nbsp;
        <a
          href="https://www.smhi.se/data/oppna-data/villkor-for-anvandning-1.30622"
          target="_blank"
        >
          på SMHI:s webbplats
        </a>
        .
        <br />
        Favicon från&nbsp;
        <a
          href="https://www.flaticon.com/free-icons/temperature"
          title="temperature icons"
        >
          Freepik – Flaticon
        </a>
        . <br />
        Applikationen är avsedd för privat bruk.
      </p>
      <p>
        <strong>Ursprunglig data:</strong> lufttemperatur, celsius,
        momentanvärde, 1 gång/timme, från SMHI:s officiella mätstation Gotska
        Sandön A.
      </p>
      <p>
        Hämtad data är inte granskad av SMHI. För rättade och
        kvalitetskontrollerade historiska data, se&nbsp;
        <a
          href="https://www.smhi.se/data/meteorologi/ladda-ner-meteorologiska-observationer#stations=core,param=airtemperatureInstant,stationid=89230"
          target="_blank"
        >
          SMHI:s observationsdata
        </a>
        .
      </p>
      <p>
        <strong>Bearbetning:</strong> Urvalet av hämtad data är begränsat till
        data från 2024. Datan presenteras som högsta noterade temperatur/dygn.
        Bearbetningen gjord av&nbsp;
        <a href="https://github.com/helihard" target="_blank">
          Emprex Enbyte
        </a>
        &nbsp;2024.
      </p>
      <div>
        <strong>Bakgrund:</strong> För ett privat projekt behövde jag kunna få
        väderdata från Gotska Sandön nästkommande dag.
        <p>
          Jag märkte snart att SMHI:s tjänst&nbsp;
          <a
            href="https://www.smhi.se/klimat/klimatet-da-och-nu/hur-var-vadret/q/Gotska%20Sand%C3%B6n/"
            target="_blank"
          >
            <i>Hur var vädret?</i>
          </a>
          &nbsp;ibland släpade efter i rapporteringen, att data ibland saknades
          och att data i tjänsten skilde sig, ibland markant, från stationens
          direktrapporterade data (tillgängliga via tjänsten&nbsp;
          <a
            href="https://www.smhi.se/vader/observationer/mina-observationer-wow#id=89230"
            target="_blank"
          >
            <i>Mina observationer – WOW</i>
          </a>
          ).{" "}
        </p>
        <p>
          <i>Mina observationer – WOW</i> kommer att tas bort från SMHI i maj
          2024. Tjänsten&nbsp;
          <a href="https://wow.metoffice.gov.uk/" target="_blank">
            <i>MetOffice WOW – Weather Observations Website</i>
          </a>
          &nbsp;fann jag vara, till skillnad från SMHI:s WOW-tjänst,
          användarovänlig.
        </p>
        <p>
          <a
            href="https://www.smhi.se/vader/observationer/observationer#ws=wpt-a,proxy=wpt-a,tab=all,stationid=89230,type=weather"
            target="_blank"
          >
            Senaste observationsdata från SMHI
          </a>
          &nbsp;är endast tillgängliga i 24 timmar. För äldre direktrapporterade
          – det vill säga inte granskade av SMHI – data är nedladdning i
          csv-format (tillgängliga på&nbsp;
          <a
            href="https://www.smhi.se/data/meteorologi/ladda-ner-meteorologiska-observationer#stations=core,param=airtemperatureInstant,stationid=89230"
            target="_blank"
          >
            <i>SMHI – Ladda ner meteorologiska observationer</i>
          </a>
          ) ett alternativ. Det krävde dock dagliga nedladdningar av filer och
          bearbetning av data – omvandling från UTC till CET/CEST-tid med mera
          –, och data i filerna var svåröverskådliga.
        </p>
        <p>
          Att skapa en webbapplikation för bearbetning och presentation av
          väderstationens direktrapporterade data med SMHI:s REST API var det
          mest effektiva alternativet. Applikationen är byggd med HTML, CSS,
          React och Fetch API. En&nbsp;
          <a href="https://helihard.github.io/gsweather/" target="_blank">
            äldre version byggd med vanilla JavaScript
          </a>
          &nbsp;finns tillgänglig via min GitHub.
        </p>
        <p>
          <strong>För mer information om Gotska Sandön</strong>, se
          exempelvis&nbsp;
          <a
            href="https://www.lansstyrelsen.se/gotland/besoksmal/nationalparker/gotska-sandons-nationalpark.html"
            target="_blank"
          >
            Länsstyrelsen Gotlands län
          </a>
          &nbsp; och&nbsp;
          <a
            href="https://www.sverigesnationalparker.se/park/gotska-sandons-nationalpark"
            target="_blank"
          >
            Sveriges Nationalparker
          </a>
          .
        </p>
      </div>
    </div>
  )
}

export default Description
