import 'package:flutter_test/flutter_test.dart';
import 'package:bio_tiktok/main.dart';

void main() {
  testWidgets('App starts on ClickToEnter and navigates to Homepage', (WidgetTester tester) async {
    // Build our app and trigger a frame.
    await tester.pumpWidget(const MyApp());

    // Verify that the ClickToEnter screen is shown.
    expect(find.text('Tap'), findsOneWidget);

    // Tap the screen to navigate.
    await tester.tap(find.text('Tap'));
    await tester.pump();
    await tester.pump(const Duration(milliseconds: 400));

    // Verify that the Homepage is shown with the expected bio title.
    expect(find.text('s1aht'), findsOneWidget);
  });
}
