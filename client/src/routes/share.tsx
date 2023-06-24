import EditorWithTabs from "../pages/ide/Panels/Main/MainView/EditorWithTabs";
import { PgExplorer, PgRouter, PgShare, PgView, Sidebar } from "../utils/pg";

export const share = PgRouter.create({
  path: "/{shareId}",
  validate: ({ shareId }) => PgShare.isValidId(shareId),
  handle: ({ shareId }) => {
    // Set main view
    PgView.setMain(async () => {
      PgView.setSidebarLoading(true);

      // Get the share data
      const files = await PgShare.get(shareId);

      // Initialize explorer
      await PgExplorer.init({ files });

      // Set sidebar
      PgView.setSidebarState();

      return EditorWithTabs;
    });

    // Handle sidebar
    const { dispose } = PgView.onDidChangeSidebarState((state) => {
      if (state === Sidebar.TUTORIALS) PgRouter.navigate("/tutorials");
    });

    return () => dispose();
  },
});