import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Tournesol";
  navs = [
    {
      label: "Programmation et nouvelles technologies",
      isCollapse: true,
      link: null,
      subNavs: [
        {
          label: "Idée",
          link: "idee",
        },
        { label: "DB Schema", link: "idee/db/schema" },
        {
          label: "Serveur",
          isCollapse: true,
          link: null,
          disabled: true,
          subNavs: [
            { label: "Documentation", link: "api/docs", disabled: true },
            { label: "Sources", link: "api/sources", disabled: true },
            { label: "API", link: "api", disabled: true },
            { label: "DB", link: "api/db", disabled: true },
          ],
        },
        {
          label: "Web",
          isCollapse: true,
          link: null,
          disabled: true,
          subNavs: [
            { label: "Sources", link: "web/sources", disabled: true },
            { label: "App", link: "web", disabled: true },
          ],
        },
        {
          label: "Mobile",
          isCollapse: true,
          link: null,
          disabled: true,
          subNavs: [
            { label: "Sources", link: "mobile/sources", disabled: true },
            { label: "Apk", link: "mobile", disabled: true },
          ],
        },
      ],
    },
    {
      label: "Développement avancé d'applications web",
      isCollapse: true,
      link: null,
      subNavs: [
        { label: "Documentation", link: "java/docs", disabled: true },
        { label: "DB Schema", link: "java/db/schema" },
        {
          label: "Sources",
          link: "https://github.com/YzYpYzY/BlackStar",
        },
        {
          label: "DB",
          link: "https://blackstar-db.yzypyzy.com/",
        },
        {
          label: "App",
          link: "https://blackstar.yzypyzy.com/",
        },
      ],
    },
    {
      label: "Business Inteligence and Data Analytics",
      isCollapse: true,
      link: null,
      disabled: true,
      subNavs: [{ label: "Exercices", link: "bi", disabled: true }],
    },
  ];

  toggle(nav): void {
    console.log(nav.isCollapse);

    nav.isCollapse = !nav.isCollapse;
  }
  activeLink(nav): void {
    if (nav.link.includes("https")) {
      window.open(nav.link);
    }
  }
}
