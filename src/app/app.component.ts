import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
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
          label: "API",
          isCollapse: true,
          link: null,
          subNavs: [
            { label: "Documentation", link: "api/docs" },
            { label: "Sources", link: "api/sources" },
            { label: "Endpoint", link: "api" },
            { label: "DB Schema", link: "api/db/schema" },
            { label: "DB", link: "api/db" }
          ]
        },
        {
          label: "Web",
          isCollapse: true,
          link: null,
          subNavs: [
            { label: "Screens", link: "web/screens" },
            { label: "Sources", link: "web/sources" },
            { label: "Endpoint", link: "web" }
          ]
        },
        {
          label: "Mobile",
          isCollapse: true,
          link: null,
          subNavs: [
            { label: "Screens", link: "mobile/screens" },
            { label: "Sources", link: "mobile/sources" },
            { label: "Apk", link: "mobile" }
          ]
        }
      ]
    },
    {
      label: "Développement avancé d'applications web",
      isCollapse: true,
      link: null,
      subNavs: [
        { label: "Documentation", link: "java/docs" },
        { label: "DB Schema", link: "java/db/schema" },
        {
          label: "Sources",
          link: "https://github.com/YzYpYzY/BlackStar"
        },
        { label: "DB", link: "java/db" },
        { label: "Endpoint", link: "java" }
      ]
    },
    {
      label: "Business Inteligence and Data Analytics",
      isCollapse: true,
      link: null,
      subNavs: [{ label: "Exercices", link: "bi" }]
    }
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
