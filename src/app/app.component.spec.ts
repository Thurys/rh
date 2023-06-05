import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatToolbarHarness } from '@angular/material/toolbar/testing';
import { HarnessLoader } from '@angular/cdk/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let loader: HarnessLoader;
  let app_title: string = 'Rockharz Warmup';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatToolbarModule, MatIconModule],
      declarations: [AppComponent]
    })
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title '${ app_title }'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual(app_title);
  });

  it('should render a material toolbar containing the title', async () => {
    const toolbars = await loader.getAllHarnesses(MatToolbarHarness.with({text: app_title}));

    expect(toolbars.length).toBe(1);
    expect(await toolbars[0].hasMultipleRows()).toBeFalse();
  });
});
